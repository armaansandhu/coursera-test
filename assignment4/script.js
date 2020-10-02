var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i in names) {
    if (names[i][0].toLowerCase() != 'j') {
        helloSpeaker.speak(names[i]);
    } else {
        byeSpeaker.speak(names[i]);
    }
}