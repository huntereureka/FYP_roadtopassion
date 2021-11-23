const max_score_1_1 = [5, 0, 0, 0];
const max_score_1_2 = [0, 5, 0, 0];
const max_score_1_3 = [0, 0, 5, 0];
const max_score_1_4 = [0, 0, 0, 5];
const max_score_1_5 = [5, 0, 5, 0];
const max_score_1_6 = [5, 5, 0, 0];
const max_score_1_7 = [0, 0, 5, 5];
const max_score_1_8 = [0, 5, 0, 5];
const score_part1 = [max_score_1_1, max_score_1_2, max_score_1_3, max_score_1_4, max_score_1_5, max_score_1_6, max_score_1_7, max_score_1_8];

const raec_max_1 = [15, 0, 0, 15]; //dsf
const raec_max_2 = [15, 0, 15, 15]; //dis
const raec_max_3 = [15, 15, 15, 0]; //dit
const raec_max_4 = [0, 15, 15, 15]; //bft
const raec_max_5 = [20, 20, 20, 20]; //bia
const diploma_raec_max_arr = [raec_max_1, raec_max_2, raec_max_3, raec_max_4, raec_max_5];

const max_score_2_1 = [5, 0, 0, 0, 0];
const max_score_2_2 = [0, 5, 0, 0, 0];
const max_score_2_3 = [0, 0, 5, 0, 0];
const max_score_2_4 = [0, 0, 0, 5, 0];
const max_score_2_5 = [0, 0, 0, 0, 5];
const max_score_2_6 = [-1, 3, 5, -1, 3];
const max_score_2_7 = [0, 0, 4, 5, 4];
const max_score_2_8 = [4, 0, -1, 4, 5];
const max_score_2_9 = [4, 5, -1, -1, -1];
const score_part2 = [max_score_2_1, max_score_2_2, max_score_2_3, max_score_2_4, max_score_2_5, max_score_2_6, max_score_2_7, max_score_2_8, max_score_2_9];

const DIPLOMA_NUM = 5;
const user_raec_score = [0, 0, 0, 0];
const user_diploma_score = [0, 0, 0, 0, 0]; //dsf, dis, dit, dbft, dba
const user_diploma_id = [0, 1, 2, 3, 4];
const slider_bar_score = [];

const PART_ONE_QN_NUM = 8;
const MAX_QN_NUM = 17;
var current_qn = 0;
const qns_counter = [0, 0, 0, 0, 0];

const display_qns_txt = document.getElementById("qns"); //text display question
const slider_bar = document.getElementById("myRange");

// QUESTIONS USED
const questions = [
    //Part 1
    "Draw or Build things with tools",
    "Come up with creative solutions",
    "Lead a group to finish tasks",
    "Organize or sort your items",
    "Simplify complex tasks",
    "Make a problem solving application",
    "Plan out a camping trip for secondary school students",
    "Deliver a motivational speech",
    //Part 2
    "Investigating the aftermath of a cyberattack",
    "Developing a secure network for a company",
    "Programming a website that is easy to use",
    "Learning about Cryptocurrency and their uses",
    "Learning about how databases containing user data are used",
    "Using AI to solve tasks",
    "Learning the impact Grab and Uber had on the transportation industry",
    "Analyzing, cleaning and sorting data to make informed decisions",
    "Preventing website users from getting hacked"
];
//-----------------------------Modded Quicksort----------------------------------------------
function swap(array, a, b) {
    var t = array[a];
    array[a] = array[b];
    array[b] = t;
}

function partition(array_main, array_id, low, high) {
    var j;
    var pivot = array_main[high];
    var i = low - 1;
    for (j = low; j < high; j++) {
        if (array_main[j] <= pivot) {
            i++; // swap it with the greater element pointed by i
            swap(array_main, i, j); // swap element at i with element at j
            swap(array_id, i, j);
        }
    }
    swap(array_main, i + 1, high); // swap pivot with the greater element at i
    swap(array_id, i + 1, high);
    return i + 1; // return the partition point
}

function quickSort(array_main, array_id, low, high) {
    if (low < high) {
        var pi = partition(array_main, array_id, low, high);
        quickSort(array_main, array_id, low, pi - 1); // recursive call on the left of pivot
        quickSort(array_main, array_id, pi + 1, high); // recursive call on the right of pivot
    }
}
//-------------------------------------------------------------------------------------------------------------
//maths
function LimitValue(value, max) {
    if (max >= 0) {
        if (value == 5 && max == 5) {
            return 7;
        } else if (value > max) {
            return max;
        }
        return value;
    } else {
        if (value >= 4) {
            return -value + 1;
        }
        return 0;
    }
}

function GetDiplomaScoreRAEC(user_score, dip_max) {
    if (dip_max == 0) {
        return (15 - user_score) / 15
    }
    return user_score / dip_max;
}

function AddCount(range) {
    qns_counter[range - 1]++;
}

function CalculateDiplomaScore() {
    var i, j;
    for (i = 0; i < MAX_QN_NUM; i++) {
        slider_bar_score[i] = parseInt(slider_bar_score[i]);
    }
    //RAEC
    for (i = 0; i < PART_ONE_QN_NUM; i++) {
        for (j = 0; j < 4; j++) {
            user_raec_score[j] += LimitValue(slider_bar_score[i], score_part1[i][j]);
        }
    }
    for (i = 0; i < DIPLOMA_NUM; i++) {
        for (j = 0; j < 4; j++) {
            user_diploma_score[i] += GetDiplomaScoreRAEC(user_raec_score[j], diploma_raec_max_arr[i][j]);
        }
    }
    for (i = 0; i < DIPLOMA_NUM; i++) {
        user_diploma_score[i] = parseInt(user_diploma_score[i] * 5);
    }
    //Last part
    for (i = PART_ONE_QN_NUM; i < MAX_QN_NUM; i++) {
        AddCount(slider_bar_score[i]);
        for (j = 0; j < DIPLOMA_NUM; j++) {
            user_diploma_score[j] += LimitValue(slider_bar_score[i], score_part2[i - PART_ONE_QN_NUM][j]);
        }
    }
}

//webpage
function OnBack() {
    slider_bar_score[current_qn] = slider_bar.value;
    current_qn--;
    slider_bar.value = slider_bar_score[current_qn]; //reset slider_bar_qn
    display_qns_txt.innerText = questions[current_qn]; // changing text of qns
    if (current_qn == PART_ONE_QN_NUM - 1) {
        document.getElementById('qns-starter').innerText = ("I like to...");
    } else if (current_qn == 0) {
        document.getElementById("back").style.visibility = "hidden";
    } else if (current_qn == MAX_QN_NUM - 2) { //2nd last question
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("submit").style.visibility = "hidden";
    }
}

function OnNext() {
    slider_bar_score[current_qn] = slider_bar.value;
    current_qn++;
    slider_bar.value = slider_bar_score[current_qn]; //reset slider_bar_qn
    display_qns_txt.innerText = questions[current_qn]; // changing text of qns
    if (current_qn == PART_ONE_QN_NUM) { //change mode
        document.getElementById('qns-starter').innerText = ("I am interested in...");
    } else if (current_qn == 1) {
        document.getElementById("back").style.visibility = "visible";
    } else if (current_qn == MAX_QN_NUM - 1) { //last question
        document.getElementById("submit").style.visibility = "visible";
        document.getElementById("testtext").style.visibility = "visible";
        document.getElementById("next").style.visibility = "hidden";
        // document.getElementById("crystal").style.visibility = "visible";
        // document.getElementById("crystal1").style.visibility = "visible";
    }
}

// Assigning scores based on diploma
function AssignDiploma() {
    var i;
    for (i = 0; i < 5; i++) {
        if (qns_counter[i] >= 7) {
            return ("cict");
        }
    }
    quickSort(user_diploma_score, user_diploma_id, 0, DIPLOMA_NUM - 1);
    if (user_diploma_id[DIPLOMA_NUM - 1] == user_diploma_id[DIPLOMA_NUM - 2]) { // 2 highest num
        return ("cict");
    }
    switch (user_diploma_id[DIPLOMA_NUM - 1]) { //take largest
        case 0:
            return ("dsf");
            break;
        case 1:
            return ("dis");
            break;
        case 2:
            return ("dit");
            break;
        case 3:
            return ("bft");
            break;
        case 4:
            return ("bia");
            break;
    }
    return -1;
}

function GetFinalResults() //final
{
    var to_diploma_page;
    slider_bar_score[current_qn] = slider_bar.value; //calculate last quesiton
    CalculateDiplomaScore();
    window.transitionToPage = function(href) {
        document.querySelector('body').style.opacity = 0;
        setTimeout(function() { window.location.href = href }, 500);
    };
    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('body').style.opacity = 1;
    });
    const assigned_diploma = AssignDiploma();
    if (assigned_diploma != -1) {
        to_diploma_page = "/templates/" + assigned_diploma;
    } else {
        to_diploma_page = "/templates/404";
    }
    console.log(to_diploma_page);
    transitionToPage(to_diploma_page);
}

function Init() {
    var i;
    for (i = 0; i < MAX_QN_NUM; i++) {
        slider_bar_score[i] = 3;
    }
}

function Main() {
    Init();
}

Main();