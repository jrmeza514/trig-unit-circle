$(document).ready(function(){
  var DEGREE_SYMBOL = "°";
  var PI_SYMBOL = "π";
  var SQRT = "√"
  lines = ko.observableArray([
    {
      classes : "x-axis axis deg deg0",
      points : {
        start: {
          coordinates: "( 1 ,0 )",
          degree: "0" + DEGREE_SYMBOL,
          radian: "0" + PI_SYMBOL
        },
        end: {
          coordinates: "( -1 ,0 )",
          degree: "180" + DEGREE_SYMBOL,
          radian: PI_SYMBOL
        }
      }
    },
    {
      classes : "deg deg30",
      points : {
        start: {
          coordinates: "( " + SQRT +"(3)/2 , 1/2 )",
          degree: "30" + DEGREE_SYMBOL,
          radian: PI_SYMBOL + "/6"
        },
        end: {
          coordinates: "( -" + SQRT +"(3)/2 , -1/2 )",
          degree: "210" + DEGREE_SYMBOL,
          radian: "7" + PI_SYMBOL + "/6"
        }
      }
    },
    {
      classes : "deg deg45",
      points : {
        start: {
          coordinates: "( " + SQRT + " (2)/2 , " + SQRT + "(2)/2 )",
          degree: "45" + DEGREE_SYMBOL,
          radian: PI_SYMBOL + "/4"
        },
        end: {
          coordinates: "( -" + SQRT + " (2)/2 , -" + SQRT + "(2)/2 )",
          degree: "225" + DEGREE_SYMBOL,
          radian: "5" + PI_SYMBOL + "/4"
        }
      }
    },
    {
      classes : "deg deg60",
      points : {
        start: {
          coordinates: "( 1/2 , " +  SQRT +"(3)/2 )",
          degree: "60" + DEGREE_SYMBOL,
          radian: PI_SYMBOL + "/3"
        },
        end: {
          coordinates: "( -1/2 , -" +  SQRT +"(3)/2 )",
          degree: "240" + DEGREE_SYMBOL,
          radian: "4" + PI_SYMBOL + "/3"
        }
      }
    },
    {
      classes : "y-axis axis deg deg90",
      points : {
        start: {
          coordinates: "( 1 ,0 )",
          degree: "90" + DEGREE_SYMBOL,
          radian: PI_SYMBOL + "/2"
        },
        end: {
          coordinates: "( -1 ,0 )",
          degree: "270" + DEGREE_SYMBOL,
          radian: "3" + PI_SYMBOL + "/2"
        }
      }
    },
    {
      classes : "deg deg120",
      points : {
        start: {
          coordinates: "( -1/2 , " +  SQRT +"(3)/2 )",
          degree: "120" + DEGREE_SYMBOL,
          radian: "2" + PI_SYMBOL + "/3"
        },
        end: {
          coordinates: "( 1/2 , -" +  SQRT +"(3)/2 )",
          degree: "300" + DEGREE_SYMBOL,
          radian: "5" + PI_SYMBOL + "/3"
        }
      }
    },
    {
      classes : "deg deg135",
      points : {
        start: {
          coordinates: "( -" + SQRT + " (2)/2 , " + SQRT + "(2)/2 )",
          degree: "135" + DEGREE_SYMBOL,
          radian: "3" + PI_SYMBOL + "/4"
        },
        end: {
          coordinates: "( " + SQRT + " (2)/2 , -" + SQRT + "(2)/2 )",
          degree: "315" + DEGREE_SYMBOL,
          radian: "7" + PI_SYMBOL + "/4"
        }
      }
    },
    {
      classes : "deg deg150",
      points : {
        start: {
          coordinates: "( -" + SQRT +"(3)/2 , 1/2 )",
          degree: "150" + DEGREE_SYMBOL,
          radian: "5" + PI_SYMBOL + "/6"
        },
        end: {
          coordinates: "( " + SQRT +"(3)/2 , -1/2 )",
          degree: "330" + DEGREE_SYMBOL,
          radian: "11" + PI_SYMBOL + "/6"
        }
      }
    }
  ]);

  ko.applyBindings();
  setTimeout(function(){
    var audio = document.getElementById("audio");
    audio.pause();
  }, 2010);
});
