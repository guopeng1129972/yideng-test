连接到百度跨过多少个路由器
traceroute www.baidu.com 

macbookdeMacBook-Pro-2:~ mac$ trace
trace traceroute traceroute6
macbookdeMacBook-Pro-2:~ mac$ traceroute www.baidu.com
traceroute: Warning: www.baidu.com has multiple addresses; using 182.61.200.7
traceroute to www.a.shifen.com (182.61.200.7), 64 hops max, 52 byte packets
1 192.168.1.1 (192.168.1.1) 248.104 ms 174.232 ms 140.253 ms
2 10.225.64.1 (10.225.64.1) 83.907 ms 356.279 ms 51.900 ms
3 10.225.0.9 (10.225.0.9) 121.952 ms

底层和ping命令是一样
ttl的递减表示转发跨过的最大转发数   
macbookdeMacBook-Pro-2:~ mac$ ping www.baidu.com
PING www.a.shifen.com (182.61.200.7): 56 data bytes
64 bytes from 182.61.200.7: icmp_seq=0 ttl=50 time=27.010 ms
64 bytes from 182.61.200.7: icmp_seq=1 ttl=50 time=26.343 ms
64 bytes from 182.61.200.7: icmp_seq=2 ttl=50 time=41.786 ms
64 bytes from 182.61.200.7: icmp_seq=3 ttl=50 time=26.494 ms
64 bytes from 182.61.200.7: icmp_seq=4 ttl=50 time=21.370 ms
64 bytes from 182.61.200.7: icmp_seq=5 ttl=50 time=40.671 ms
64 bytes from 182.61.200.7: icmp_seq=6 ttl=50 time=20.891 ms
^C
--- www.a.shifen.com ping statistics ---
7 packets transmitted, 7 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 20.891/29.224/41.786/7.934 ms