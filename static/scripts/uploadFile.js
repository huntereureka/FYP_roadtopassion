// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./libs/s3Client.js"; // Helper function that creates Amazon S3 service client module.
import { path } from "path";
import { fs } from "fs";

const file = "OBJECT_PATH_AND_NAME"; // Path to and name of object. For example '../myFiles/index.js'.
const fileStream = fs.createReadStream(file);

// Set the parameters
export const uploadParams = {
    Bucket: "BUCKET_NAME",
    // Add the required 'Key' parameter using the 'path' module.
    Key: path.basename(file),
    // Add the required 'Body' parameter
    Body: fileStream,
};


// Upload file to specified bucket.
export const run = async () => {
    try {
        const data = await s3Client.send(new PutObjectCommand(uploadParams));
        console.log("Success", data);
        return data; // For unit tests.
    } catch (err) {
        console.log("Error", err);
    }
};
run();

// needed to set max no. of stickers
var click_count = 0;

// defining dimensions of container
var dimensions = screen.width;
var stage = new Konva.Stage({
    container: 'container',
    width: dimensions,
    height: dimensions,
});

// creating container
var layer = new Konva.Layer();
stage.add(layer);

// defining background image
var imageObj = new Image();
var background = new Konva.Rect({
    x: ((stage.width() - 360) / 2),
    y: ((stage.height() - 360) / 2),
    width: 360,
    height: 360,
    image: imageObj,
    listening: false, // because we don't need any events on the background
});
layer.add(background);

// set fill pattern image
imageObj.onload = function () {
    background.fillPatternImage(imageObj);
};
imageObj.src = '/static/images/dbft-3.png';

var fillPatternImage = background.fillPatternImage(); // get fill pattern image

// the stage is draggable
// that means absolute position of background may change
// so we need to reset it back to {0, 0}
stage.on('dragmove', () => {
    background.absolutePosition({
        x: 0,
        y: 0
    });
});

// function from https://stackoverflow.com/a/15832662/512042
function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

document.getElementById('save').addEventListener(
    'click',
    function () {
        tr.nodes([]);
        var dataURL = stage.toDataURL({
            pixelRatio: 3
        });
        downloadURI(dataURL, 'stage.png');
    },
    false
);

// determine url of tapped element
var itemURL = '';
document
    .getElementById('drag-items')
    .addEventListener('click', function (e) {
        stage.setPointersPositions(e);
        itemURL = e.target.src;
        Konva.Image.fromURL(itemURL, function (image1) {
            if (click_count === 8) {
                $(window).load(function () {
                    $(".trigger_popup_fricc").click(function () {
                        $('.hover_bkgr_fricc').show();
                    });
                    $('.hover_bkgr_fricc').click(function () {
                        $('.hover_bkgr_fricc').hide();
                    });
                    $('.popupCloseButton').click(function () {
                        $('.hover_bkgr_fricc').hide();
                    });
                });
            } else {
                layer.add(image1);
                image1.draggable(true);
                click_count += 1;
                console.log(click_count);
            }
        });
    });

var tr = new Konva.Transformer();
layer.add(tr);

// clicks should select/deselect shapes
stage.on('click tap', function (e) {
    // if click on empty area - remove all selections
    if (e.target === stage) {
        tr.nodes([]);
        return;
    }

    // do we pressed shift or ctrl?
    const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
    const isSelected = tr.nodes().indexOf(e.target) >= 0;

    if (!metaPressed && !isSelected) {
        // if no key pressed and the node is not selected
        // select just one
        tr.nodes([e.target]);
    } else if (metaPressed && isSelected) {
        // if we pressed keys and node was selected
        // we need to remove it from selection:
        const nodes = tr.nodes().slice(); // use slice to have new copy of array
        // remove node from array
        nodes.splice(nodes.indexOf(e.target), 1);
        tr.nodes(nodes);
    } else if (metaPressed && !isSelected) {
        // add the node into selection
        const nodes = tr.nodes().concat([e.target]);
        tr.nodes(nodes);
    }
});

function load_pic_test() {
    $(window).load(function () {
        $(".trigger_popup_fricc").click(function () {
            $('.hover_bkgr_fricc').show();
        });
        $('.hover_bkgr_fricc').click(function () {
            $('.hover_bkgr_fricc').hide();
        });
        $('.popupCloseButton').click(function () {
            $('.hover_bkgr_fricc').hide();
        });
    });
}

function load_desc() {
    $('.hover_bkgr_fricc').click(function () {
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.hover_bkgr_fricc').hide();
    });
};

$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("canvas").on("swipe", swipeHandler);

    // Callback function references the event target and adds the 'swipe' class to it
    function swipeHandler(event) {
        tr.nodes([]);
        var dataURL = stage.toDataURL({
            pixelRatio: 3
        });
        downloadURI(dataURL, 'stage.png');
    }
});