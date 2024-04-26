let JsonData =
[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

// let currentData = 5;
//   console.log(JsonData[currentData].timeframes.daily.previous);
//FOR LOWER PROFILE 
let cuurentData=0;
let workbox,playbox,studybox,exercisebox,socialbox,selfcarebox;
let daily = document.querySelector('.daily');
let lowerSectionWork =document.querySelector('.lower-section');
let lowerSectionPlay = document.querySelector('.lower-play');
let lowerSectionStudy=document.querySelector('.lower-study');
let lowerSectionExercise=document.querySelector('.lower-exercise');
let lowerSectionSocial= document.querySelector('.lower-social');
let lowerSectionnSelfCare= document.querySelector('.lower-self-care');
//FOR DAILY SECTION 
daily.addEventListener('click',()=>
{
    
    let currentele =0;
    for (let i = 0 ; i<JsonData.length ; i++)
        {
            
            if (JsonData[i].timeframes.daily && currentele==0)
            {
                console.log(JsonData[currentele]);
               
        workbox=` <div class="work">
        <p>Work</p>
      </div>
      <div class="hours">
       <h1>${JsonData[currentele].timeframes.daily.current}hrs</h1> 
      </div>
      <div class="footer">
        <p>Last Day-${JsonData[currentele].timeframes.daily.previous}hrs</p>
      </div>
            `
            currentele++;
            }
           if (JsonData[i].timeframes.daily && currentele==1)
           {
            playbox=`
            <div class="play">
        <p>Play</p>
    </div>
    <div class="hours">
    <h1>${JsonData[currentele].timeframes.daily.current}hrs</h1> 
    </div>
    <div class="footer">
    <p>Last Day -${JsonData[currentele].timeframes.daily.previous}hrs</p>
    </div>
`
currentele++;
}
if (JsonData[i].timeframes.daily && currentele==2)
{
    studybox=` <div class="study">
    <p>Study</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.daily.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Day -${JsonData[currentele].timeframes.daily.previous}hrs</p>
  </div>
    `
    currentele++;
}
if (JsonData[i].timeframes.daily && currentele==3)
{
    exercisebox=`
    <div class="exercise">
    <p>Exercise</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.daily.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Day -${JsonData[currentele].timeframes.daily.previous}hrs</p>
  </div>
    `
    currentele++;
}

if (JsonData[i].timeframes.daily && currentele==4)
{
    socialbox=`<div class="social">
    <p>Social</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.daily.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Day -${JsonData[currentele].timeframes.daily.previous}hrs</p>
  </div>
`
currentele++;
}
if (JsonData[i].timeframes.daily && currentele==5)
{
    selfcarebox=`<div class="self-care">
    <p>Self Care </p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.daily.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Day -${JsonData[currentele].timeframes.daily.previous}hrs</p>
  </div>
`
}
}
        lowerSectionWork.innerHTML=workbox;
        lowerSectionPlay.innerHTML=playbox;
        lowerSectionStudy.innerHTML=studybox;
        lowerSectionExercise.innerHTML=exercisebox;
        lowerSectionSocial.innerHTML=socialbox;
        lowerSectionnSelfCare.innerHTML=selfcarebox;
}
);





let monthly= document.querySelector('.monthly');
monthly.addEventListener('click',()=>
{
let currentele=0;
for (let i = 0 ; i<JsonData.length ; i++)
        {
            
            if (JsonData[i].timeframes.monthly && currentele==0)
            {
                console.log(JsonData[currentele]);
               
        workbox=` <div class="work">
        <p>Work</p>
      </div>
      <div class="hours">
       <h1>${JsonData[currentele].timeframes.monthly.current}hrs</h1> 
      </div>
      <div class="footer">
        <p>Last Month-${JsonData[currentele].timeframes.monthly.previous}hrs</p>
      </div>
            `
            currentele++;
            }
           if (JsonData[i].timeframes.monthly && currentele==1)
           {
            playbox=`
            <div class="play">
        <p>Play</p>
    </div>
    <div class="hours">
    <h1>${JsonData[currentele].timeframes.monthly.current}hrs</h1> 
    </div>
    <div class="footer">
    <p>Last Month -${JsonData[currentele].timeframes.monthly.previous}hrs</p>
    </div>
`
currentele++;
}
if (JsonData[i].timeframes.monthly && currentele==2)
{
    studybox=` <div class="study">
    <p>Study</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.monthly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Month -${JsonData[currentele].timeframes.monthly.previous}hrs</p>
  </div>
    `
    currentele++;
}
if (JsonData[i].timeframes.monthly && currentele==3)
{
    exercisebox=`
    <div class="exercise">
    <p>Exercise</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.monthly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Month -${JsonData[currentele].timeframes.monthly.previous}hrs</p>
  </div>
    `
    currentele++;
}

if (JsonData[i].timeframes.monthly && currentele==4)
{
    socialbox=`<div class="social">
    <p>Social</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.monthly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Month -${JsonData[currentele].timeframes.monthly.previous}hrs</p>
  </div>
`
currentele++;
}
if (JsonData[i].timeframes.monthly && currentele==5)
{
    selfcarebox=`<div class="self-care">
    <p>Self Care </p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.monthly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Month -${JsonData[currentele].timeframes.monthly.previous}hrs</p>
  </div>
`
}
}
        lowerSectionWork.innerHTML=workbox;
        lowerSectionPlay.innerHTML=playbox;
        lowerSectionStudy.innerHTML=studybox;
        lowerSectionExercise.innerHTML=exercisebox;
        lowerSectionSocial.innerHTML=socialbox;
        lowerSectionnSelfCare.innerHTML=selfcarebox;
}
)
let weekly = document.querySelector('.weekely');
weekly.addEventListener('click', ()=>
{
let currentele=0;
for (let i = 0 ; i<JsonData.length ; i++)
        {
            
            if (JsonData[i].timeframes.weekly && currentele==0)
            {
                console.log(JsonData[currentele]);
               
        workbox=` <div class="work">
        <p>Work</p>
      </div>
      <div class="hours">
       <h1>${JsonData[currentele].timeframes.weekly.current}hrs</h1> 
      </div>
      <div class="footer">
        <p>Last Week-${JsonData[currentele].timeframes.weekly.previous}hrs</p>
      </div>
            `
            currentele++;
            }
           if (JsonData[i].timeframes.weekly && currentele==1)
           {
            playbox=`
            <div class="play">
        <p>Play</p>
    </div>
    <div class="hours">
    <h1>${JsonData[currentele].timeframes.weekly.current}hrs</h1> 
    </div>
    <div class="footer">
    <p>Last Week -${JsonData[currentele].timeframes.weekly.previous}hrs</p>
    </div>
`
currentele++;
}
if (JsonData[i].timeframes.weekly && currentele==2)
{
    studybox=` <div class="study">
    <p>Study</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.weekly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Week -${JsonData[currentele].timeframes.weekly.previous}hrs</p>
  </div>
    `
    currentele++;
}
if (JsonData[i].timeframes.weekly && currentele==3)
{
    exercisebox=`
    <div class="exercise">
    <p>Exercise</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.weekly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Week -${JsonData[currentele].timeframes.weekly.previous}hrs</p>
  </div>
    `
    currentele++;
}

if (JsonData[i].timeframes.weekly && currentele==4)
{
    socialbox=`<div class="social">
    <p>Social</p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.weekly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Week -${JsonData[currentele].timeframes.weekly.previous}hrs</p>
  </div>
`
currentele++;
}
if (JsonData[i].timeframes.weekly && currentele==5)
{
    selfcarebox=`<div class="self-care">
    <p>Self Care </p>
  </div>
  <div class="hours">
   <h1>${JsonData[currentele].timeframes.weekly.current}hrs</h1> 
  </div>
  <div class="footer">
    <p>Last Week -${JsonData[currentele].timeframes.weekly.previous}hrs</p>
  </div>
`
}
}
        lowerSectionWork.innerHTML=workbox;
        lowerSectionPlay.innerHTML=playbox;
        lowerSectionStudy.innerHTML=studybox;
        lowerSectionExercise.innerHTML=exercisebox;
        lowerSectionSocial.innerHTML=socialbox;
        lowerSectionnSelfCare.innerHTML=selfcarebox;
})


























