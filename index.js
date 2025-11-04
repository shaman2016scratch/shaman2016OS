function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
docData = {}
docData.ecran = document.getElementById('ecran')
docData.ecran2 = document.getElementById('ecran2')
async function zagruz() {
  wait(1200)
  docData.ecran.innerHTML = '<text x="50%" y="50%" font-size="36" fill="black">Loading OS.</text>'
  wait(1200)
  docData.ecran.innerHTML = '<text x="50%" y="50%" font-size="36" fill="black">Loading OS..</text>'
  wait(1200)
  docData.ecran.innerHTML = '<text x="50%" y="50%" font-size="36" fill="black">Loading OS...</text>'
  wait(1200)
  docData.ecran.innerHTML = '<text x="50%" y="50%" font-size="36" fill="black">Loading OS</text>'
}
for (let i = 0; i < 5; i++) {
  zagruz()
}
wait(1200)
