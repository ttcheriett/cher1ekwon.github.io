var imageUrls=['url("./css/img/b1s1.jpg")', 'url("./css/img/b1s2.jpg")', 'url("./css/img/b1s3.jpg")', 'url("./css/img/me1.jpg")', 'url("./css/img/me2.jpg")', 'url("./css/img/me3.jpg")']
var imageNumber = imageUrls.length

function imagePop(id){

    document.getElementById('imagePopId').style.display = 'block'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'

    var imageName = document.getElementById(id + '-image').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    document.getElementsByClassName('imageContain')[0].style.animation = 'he 800ms forwards'

    document.getElementsByClassName('imageContain')[0].style.backgroundImage = imageUrls[imageIndex]
} 

function imageChange(id){

    var imageName = document.getElementById(id).style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++

    document.getElementById(id).style.backgroundImage = imageUrls[imageIndex]
}

function imageMoveLeft(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex <= 0)
    imageIndex = imageNumber - 1
    else
    imageIndex--

    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]
}

function imageMoveRight(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++

    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]
}

function imagePopNone(){
    document.getElementsByClassName('imagePop')[0].style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
}