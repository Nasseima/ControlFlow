/**
 * plants require a minimum of 0.8 square meters.
 *
 * The plants double in number every week.
 */

const pi = 3.1415
const radius = 5
const area = pi * radius * radius
console.log(area)

// The area is starting with 20 plants.
let plant = 20  

let week1 = plant + plant;
let week1Area = plant * 0.8

let week2 = week1 + week1;
let week2Area = week2 * 0.8

let week3 = week2 + week2 ;
let week3Area = week3 * 0.8

let plantSpace = 0.8
const maxArea = area *.8
const minArea = area * .5
console.log(`The growth for week 1 is ${week1}.`)
console.log(`The growth for week 2 is ${week2}.`)
console.log(`The growth for week 3 is ${week3}.`)
console.log(`The maximum capacity is ${maxArea}.`)
console.log(`The week Area for week 1 is ${week1Area}, week 2 is ${week2Area} and week 3 is ${week3Area}`)


function growth(w,week1, week2, week3, weekArea){
    if(weekArea >= maxArea){
        console.log(`Week ${w} with the work area of ${weekArea} needs to be pruned, it is greater than the maximum capacity.`)
    }

    if(weekArea <= minArea && maxArea >= weekArea){
        console.log(`Week ${w} plant is growing at an acceptable rate.`)
    }
    else{
        console.log(`Week ${w} plant is NOT growing at an acceptable rate.`)
    }
    if(weekArea <= minArea){
        console.log(`Week ${w} provides more room to plant.`)
    }
}
growth(1,week1, week2, week3,week1Area)
growth(2,week1, week2, week3,week2Area)
growth(3,week1, week2, week3,week3Area)

//Part 2: Think Bigger
newInitialPlants = 100 * 2**10
console.log(`At the end of week 10 there would be ${newInitialPlants} plants.`)

// Find the area.
week10Area = newInitialPlants * .8
console.log(`The are of week ten is ${week10Area}.`)

// Find the radius 
week10Radius = Math.sqrt(week10Area/pi)
console.log(`The radius is ${week10Radius}`)

// Part 3: Errors in Judgement