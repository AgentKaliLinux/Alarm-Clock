let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');
let btn = document.getElementById('btn');
let actualTime = document.getElementById('Time');
let setAlarm = document.getElementById('setAlarm');
let clearBtn = document.getElementById('clearBtn');


// Set the alarm time in 24-hour format (e.g. "13:30")
let Time = setInterval(() => {
    const now = new Date();
    const currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    actualTime.innerHTML = currentTime;
}, 1000);



btn.addEventListener('click', () => {

    var askAlarm = confirm('Do You Want To Repeat Alarm Or Not ? If You Want Repeat Click Okay OtherWise Cancel ');

    const alarmTime = `${hours.value}:${mins.value}:${secs.value}`;
    let newAlarmDiv = document.createElement('div');
    let newAlarm = document.createElement('p');
    let deleteAlarm = document.createElement('button');
    newAlarm.innerHTML = alarmTime;
    deleteAlarm.innerHTML = 'Delete';
    deleteAlarm.className = 'deleteBtn'
    newAlarmDiv.className = 'newAlarmDiv'
    setAlarm.prepend(newAlarmDiv);
    newAlarmDiv.append(newAlarm);
    newAlarmDiv.append(deleteAlarm);

    const deleteAlarmSpecifically = () => {
        newAlarmDiv.remove();
        const now = new Date();
        const currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

        if (currentTime !== alarmTime) {
            alert("Alarm Deleted Successfully!");
        }
    }

    const oneTimeAlarm = () => {

        const alarmTime = `${hours.value}:${mins.value}:${secs.value}`;
        setInterval(() => {
            const now = new Date();
            const currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

            if (currentTime === alarmTime) {
                let audioElement = new Audio('alarm.mp3')
                audioElement.play()
            }
        }, 1000);
    }

    const repeatableAlarm = () => {
        const alarmTime = `${hours.value}:${mins.value}:${secs.value}`;
        setInterval(() => {
            const now = new Date();
            const currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

            if (currentTime === alarmTime) {
                // Display a message to the user

                let audioElement = new Audio('alarm.mp3')
                audioElement.play()
            }
        }, 1000);
    }

    if (askAlarm) {
        repeatableAlarm();

    }
    else {
        oneTimeAlarm();
    }

    deleteAlarm.addEventListener('click', deleteAlarmSpecifically)

})

const deleteAllAlarm = () => {
    alert('All Alarms Are Cleared !')
    localStorage.clear();
}

clearBtn.addEventListener('click', deleteAllAlarm)

