In JavaScript, typeof null is 'object', which incorrectly suggests that null is an object (it isn’t, it’s a primitive value, consult my blog post on categorizing values for details). This is a bug and one that unfortunately can’t be fixed, because it would break existing code. Let’s explore the history of this bug.
The “typeof null” bug is a remnant from the first version of JavaScript. In this version, values were stored in 32 bit units, which consisted of a small type tag (1–3 bits) and the actual data of the value. The type tags were stored in the lower bits of the units. There were five of them:

000: object. The data is a reference to an object.
1: int. The data is a 31 bit signed integer.
010: double. The data is a reference to a double floating point number.
100: string. The data is a reference to a string.
110: boolean. The data is a boolean.
That is, the lowest bit was either one, then the type tag was only one bit long. Or it was zero, then the type tag was three bits in length, providing two additional bits, for four types.
Two values were special:

undefined (JSVAL_VOID) was the integer −230 (a number outside the integer range).
null (JSVAL_NULL) was the machine code NULL pointer. Or: an object type tag plus a reference that is zero.
It should now be obvious why typeof thought that null was an object: it examined its type tag and the type tag said “object”. The following is the engine’s code for typeof.
    JS_PUBLIC_API(JSType)
    JS_TypeOfValue(JSContext *cx, jsval v)
    {
        JSType type = JSTYPE_VOID;
        JSObject *obj;
        JSObjectOps *ops;
        JSClass *clasp;

        CHECK_REQUEST(cx);
        if (JSVAL_IS_VOID(v)) {  // (1)
            type = JSTYPE_VOID;
        } else if (JSVAL_IS_OBJECT(v)) {  // (2)
            obj = JSVAL_TO_OBJECT(v);
            if (obj &&
                (ops = obj->map->ops,
                 ops == &js_ObjectOps
                 ? (clasp = OBJ_GET_CLASS(cx, obj),
                    clasp->call || clasp == &js_FunctionClass) // (3,4)
                 : ops->call != 0)) {  // (3)
                type = JSTYPE_FUNCTION;
            } else {
                type = JSTYPE_OBJECT;
            }
        } else if (JSVAL_IS_NUMBER(v)) {
            type = JSTYPE_NUMBER;
        } else if (JSVAL_IS_STRING(v)) {
            type = JSTYPE_STRING;
        } else if (JSVAL_IS_BOOLEAN(v)) {
            type = JSTYPE_BOOLEAN;
        }
        return type;
    }
The steps performed by the above code are:
At (1), the engine first checks whether the value v is undefined (VOID). This check is performed by comparing the value via equals:
    #define JSVAL_IS_VOID(v)  ((v) == JSVAL_VOID)
The next check (2) is whether the value has an object tag. If it additionally is either callable (3) or its internal property [[Class]] marks it as a function (4) then v is a function. Otherwise, it is an object. This is the result that is produced by typeof null.
The subsequent checks are for number, string and boolean. There is not even an explicit check for null, which could be performed by the following C macro.
    #define JSVAL_IS_NULL(v)  ((v) == JSVAL_NULL)
This may seem like a very obvious bug, but don’t forget that there was very little time to finish the first version of JavaScript.