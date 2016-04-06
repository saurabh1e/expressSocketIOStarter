/**
 * Created by saurabh on 4/4/16.
 */
var redis = require("redis");
sub = redis.createClient(6379, '127.0.0.1', db=0);

sub.subscribe('chanel');

module.exports  = sub;