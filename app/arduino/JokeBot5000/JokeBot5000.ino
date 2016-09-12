/*
   rosserial Publisher Example
   http://luckylarry.co.uk/arduino-projects/arduino-using-a-sharp-ir-sensor-for-distance-calculation/
   http://wiki.ros.org/roslibjs/Tutorials/BasicRosFunctionality
   http://wiki.ros.org/rosserial_arduino/Tutorials/Hello%20World
*/

#include <ros.h>
#include <std_msgs/String.h>

const int IRpin = 1;
const byte switchJoke = 8;
const byte switchApplause = 5;
const byte switchCrickets = 7;
const byte switchNone = 6;
const byte switchWeather = 9;
const char INTRO[6] = "INTRO";
const char TELL_JOKE[10] = "TELL_JOKE";
const char APPLAUSE[9] = "APPLAUSE";
const char CRICKETS[9] = "CRICKETS";
const char NONE[5] = "NONE";
const char WEATHER[8] = "WEATHER";

int count = 0;
unsigned long last_time_in_range;


ros::NodeHandle  nh;

std_msgs::String str_msg;
ros::Publisher chatter("chatter", &str_msg);

void setup()
{
  //Serial.begin(57600);
  nh.initNode();
  nh.advertise(chatter);
  pinMode (switchJoke, INPUT);
  pinMode (switchWeather, INPUT);
}

void loop()
{
  if (digitalRead (switchJoke) == HIGH)
  {
    //Serial.println ("Switch closed.");
    delay (1000);
    str_msg.data = TELL_JOKE;
    chatter.publish( &str_msg );
    nh.spinOnce();
  }

  if (digitalRead (switchApplause) == HIGH)
  {
    //Serial.println ("Switch closed.");
    delay (1000);
    str_msg.data = APPLAUSE;
    chatter.publish( &str_msg );
    nh.spinOnce();
  }

  if (digitalRead (switchCrickets) == HIGH)
  {
    //Serial.println ("Switch closed.");
    delay (1000);
    str_msg.data = CRICKETS;
    chatter.publish( &str_msg );
    nh.spinOnce();
  }
  
  if (digitalRead (switchNone) == HIGH)
  {
    //Serial.println ("Switch closed.");
    delay (1000);
    str_msg.data = NONE;
    chatter.publish( &str_msg );
    nh.spinOnce();
  }

  if (digitalRead (switchWeather) == HIGH)
  {
    //Serial.println ("Switch closed.");
    delay (1000);
    str_msg.data = WEATHER;
    chatter.publish( &str_msg );
    nh.spinOnce();
  }
  
  float volts = analogRead(IRpin) * 0.0048828125;
  float distance = 65 * pow(volts, -1.10);
  // rosserial will not run if code has Serial statements
  // only use for debugging
  //Serial.println(distance);
  int intDist = (int)distance;
  //Serial.print("intDist");
  //Serial.println(intDist);
  //Serial.println(intDist < 100);


  // If I get three hits less than 150 away
  // in less than half a second then fire a message to the topic
  if (intDist < 150) {
    count++;
    if (count == 1) {
      last_time_in_range = millis();
    }
    if (count == 3) {
      //Serial.println("count == 2");
      if (millis() - last_time_in_range < 500) {
        //Serial.println("count == 2 && < 500");
        str_msg.data = INTRO;
        chatter.publish( &str_msg );
        nh.spinOnce();
      } else {
        //Serial.println("count == 2 && >= 500");
      }
      count = 0;
    }

  } else {
    //Serial.println("Greater Than 100");
  }
  delay(100);
}
