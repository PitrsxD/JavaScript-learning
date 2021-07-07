var countdownTime = 60
while (countdownTime >= 0) {
if (countdownTime === 50) {
      console.log("Orbiter transfers from ground to internal power")
      countdownTime = countdownTime - 1
  } else if (countdownTime === 0) {
      console.log("Solid rocket booster ignition and liftoff!")
      countdownTime = countdownTime - 1
  } else {
      console.log("T-" + countdownTime)
      countdownTime = countdownTime - 1
  }
}
