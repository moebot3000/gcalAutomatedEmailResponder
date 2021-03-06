// This script, when set up with a timed trigger, checks a google calendar where you put an event on days that you will be off. On days that have the 'off' event, it will reply to all unread/new emails, and then mark them as read and important for you to respond to later.

function autoReply() {
var interval = 5;    //  if the script runs every 5 minutes; change otherwise, set up timed trigger to run every 5 mins
  var date = new Date(); //get todays date
  var events = CalendarApp.getCalendarById('fillintheblankwithgooglecalid@group.calendar.google.com').getEventsForDay(date); //get calendar events happening today
  if (events.length > 0) {
    var timeFrom = Math.floor(date.valueOf()/1000) - 60 * interval;
    var threads = GmailApp.search('is:inbox after:' + timeFrom);
    for (var i = 0; i < threads.length; i++) {
      if (threads[i].isUnread()){
      threads[i].reply("Hi! I'm not in the office presently, but I will reply to your email upon my return. - You");
      threads[i].markRead();
      threads[i].markImportant();
      }
    }
  }
}
