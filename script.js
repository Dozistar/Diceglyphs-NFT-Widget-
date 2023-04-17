function changeIframe() {
  let coinCode = document.getElementById('coinCode').value
  let network = document.getElementById('network').value

  let walletAddress = document.getElementById('walletAddress').value
  let fiatAmount = document.getElementById('fiatAmount').value
  let assetDescription = document.getElementById('assetDescription').value
  let assetImage = document.getElementById('assetImage').value
  document.getElementById('nft').src = "https://onramp.money/main/checkout/?appId=1&coinCode=" + coinCode + "&network=" + network + "&walletAddress=" + walletAddress + "&fiatAmount=" + fiatAmount + "&assetDescription=" + assetDescription + "&assetImage=" + assetImage + "&merchantRecognitionId=ens#001"
}
