const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: 'frge333',
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawPackages(packages) {
  let drawPackages = document.getElementById('table');
  let template = '';
  packages.forEach((package) => {
    template += `<div class="d-flex package-box justify-content-between">To: <div>
     ${package.to} </div>
    <div>
    ${package.trackingNumber}:ID</div></div>
    `
  })
  drawPackages.innerHTML = template;
}

function drawHeavyPackages() {
  let heavyPackages = packages.filter(package => package.weight > 2)

  console.log('heavy filter', heavyPackages);
  drawPackages(heavyPackages)

}
function drawFragilePackages() {
  let fragilePackages = packages.filter(package => package.isFragile == true)
  console.log("fragile filter", fragilePackages)
  drawPackages(fragilePackages)


}
function drawExpressPackages() {
  let expressPackages = packages.filter(package => package.priorityLevel == "express")
  drawPackages(expressPackages)
}
function drawStandardPackages() {
  let standardPackages = packages.filter(package => package.priorityLevel == "standard")
  drawPackages(standardPackages)
}
function drawFreePackages() {
  let freePackages = packages.filter(package => package.priorityLevel == "free")
  drawPackages(freePackages)
}
function drawAllPackages() {
  drawPackages(packages)
}
drawAllPackages()
