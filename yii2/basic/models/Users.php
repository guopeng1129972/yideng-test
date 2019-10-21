<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "user".
 *
 * @property int $user_id
 * @property string $user_name
 * @property string $user_from
 * @property string $user_to
 * @property int $user_age
 */
class Users extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_name', 'user_from', 'user_to', 'user_age'], 'required'],
            [['user_name', 'user_from', 'user_to'], 'string'],
            [['user_age'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'user_id' => 'User ID',
            'user_name' => 'User Name',
            'user_from' => 'User From',
            'user_to' => 'User To',
            'user_age' => 'User Age',
        ];
    }
}
