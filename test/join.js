(function () {
  "use strict";

  console.log("This is a visual test.");

  var Synchronize = require(__dirname + "/../lib/join"),
    Subscription = require(__dirname + "/../lib/subscription"),
    synchronize = Synchronize(),
    s1 = Subscription(),
    s2 = Subscription(),
    s3 = Subscription();

  console.log(Synchronize);

  s1.deliver(undefined, "Hello");
  s3.deliver(undefined, "!");
  s2.deliver(undefined, "World");

  synchronize.add(s1, s2, s3);

  synchronize.when(function (args1, args2, args3) {
    console.log('[when]', args1[1], args2[1], args3[1]);
  });

  s2.deliver(undefined, "Amazing");

  synchronize.whenever(function (args1, args2, args3) {
    console.log('[whenever]', args1[1], args2[1], args3[1]);
  });

  s2.deliver(undefined, "Cruel");
  s3.deliver(undefined, "World!");
  s1.deliver(undefined, "Goodbye");

}());