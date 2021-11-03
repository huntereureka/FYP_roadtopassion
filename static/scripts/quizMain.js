// Initalize counters
let qns_counter = 0;
let question_number = 0;

// Initalize RIASEC scores
let r_riasec = 0;
let a_riasec = 0;
let e_riasec = 0;
let c_riasec = 0;

// Initalize diploma scores
let bft = 0;
let bia = 0;
let dsf = 0;
let ifs = 0;
let it = 0;

// Questions PART 1: RIASEC
// Questions_part1 = ["Program an application",
// "Come up with creative ideas or draw",
// "Lead a group to finish tasks",
// "Organize a system",
// "Simplify complex tasks",
// "Make a problem solving application",
// "Plan out a camping trip for secondary school students",
// "Deliver a motivational speech"]

// Questions PART 2
// Questions_part2 = ["Testing the security of a network",
//     "Using AI to solve tasks",
//     "Learning the impact Grab and Uber had on the transportation industry",
//     "Analyzing, cleaning and sorting data to make informed decisions",
//     "Moderate a spreadsheet to determine business costs",
//     "Programming a website that is easy to use",
//     "Developing a marketing plan for a new product on a limited budget",
//     "Ensuring that the staff are complying with the company rules"]

// QUESTIONS USED 
questions = ["Come up with creative ideas or draw",
    "Lead a group to finish tasks",
    "Organize a system",
    "Simplify complex tasks",
    "Make a problem solving application",
    "Plan out a camping trip for secondary school students",
    "Deliver a motivational speech",
    "Testing the security of a network",
    "Using AI to solve tasks",
    "Learning the impact Grab and Uber had on the transportation industry",
    "Analyzing, cleaning and sorting data to make informed decisions",
    "Moderate a spreadsheet to determine business costs",
    "Programming a website that is easy to use",
    "Developing a marketing plan for a new product on a limited budget",
    "Ensuring that the staff are complying with the company rules"
]

function onNext() {
    const qns = document.getElementById("qns"); // setting var of qns
    qns.innerText = questions[question_number]; // changing text of qns

    // getting user's answer
    let range = document.getElementById("myRange").value; // setting var of user's answer

    qns_counter += 1;
    question_number += 1;

    // debugging
    // console.log("Answer: " + range); // output user's answer
    // console.log("Questions attempted: " + qns_counter); // output questions done

    // check if questions have been completed
    if (qns_counter === 15) {
        const submit = document.getElementById("submit");
        submit.style.visibility = "visible";
        const next = document.getElementById("next");
        next.style.visibility = "collapse";
    }

    // to reset slider value back to 3
    let reset = document.getElementById("myRange"); // setting var of user's answer
    reset.value = 3;

    //  Adding up of score for RIASEC
    if (qns_counter === 1) {
        if ((+range) === 5) {
            r_riasec += 5;
        }
        if ((+range) === 4) {
            r_riasec += 4;
        }
        if ((+range) === 3) {
            r_riasec += 3;
        }
        if ((+range) === 2) {
            r_riasec += 2;
        }
    }

    if (qns_counter === 2) {
        if ((+range) === 5) {
            a_riasec += 5;
        }
        if ((+range) === 4) {
            a_riasec += 4;
        }
        if ((+range) === 3) {
            a_riasec += 3;
        }
        if ((+range) === 2) {
            a_riasec += 2;
        }
    }

    if (qns_counter === 3) {
        if ((+range) === 5) {
            e_riasec += 5;
        }
        if ((+range) === 4) {
            e_riasec += 4;
        }
        if ((+range) === 3) {
            e_riasec += 3;
        }
        if ((+range) === 2) {
            e_riasec += 2;
        }
    }

    if (qns_counter === 4) {
        if ((+range) === 5) {
            c_riasec += 5;
        }
        if ((+range) === 4) {
            c_riasec += 4;
        }
        if ((+range) === 3) {
            c_riasec += 3;
        }
        if ((+range) === 2) {
            c_riasec += 2;
        }
    }

    if (qns_counter === 5) {
        if ((+range) === 5) {
            r_riasec += 5;
            c_riasec += 5;
        }
        if ((+range) === 4) {
            r_riasec += 4;
            c_riasec += 4;
        }
        if ((+range) === 3) {
            r_riasec += 3;
            c_riasec += 3;
        }
        if ((+range) === 2) {
            r_riasec += 2;
            c_riasec += 2;
        }
    }

    if (qns_counter === 6) {
        if ((+range) === 5) {
            r_riasec += 5;
            a_riasec += 5;
        }
        if ((+range) === 4) {
            r_riasec += 4;
            a_riasec += 4;
        }
        if ((+range) === 3) {
            r_riasec += 3;
            a_riasec += 3;
        }
        if ((+range) === 2) {
            r_riasec += 2;
            a_riasec += 2;
        }
    }

    if (qns_counter === 7) {
        if ((+range) === 5) {
            e_riasec += 5;
            c_riasec += 5;
        }
        if ((+range) === 4) {
            e_riasec += 4;
            c_riasec += 4;
        }
        if ((+range) === 3) {
            e_riasec += 3;
            c_riasec += 3;
        }
        if ((+range) === 2) {
            e_riasec += 2;
            c_riasec += 2;
        }
    }

    if (qns_counter === 8) {
        if ((+range) === 5) {
            a_riasec += 5;
            e_riasec += 5;
        }
        if ((+range) === 4) {
            a_riasec += 4;
            e_riasec += 4;
        }
        if ((+range) === 3) {
            a_riasec += 3;
            e_riasec += 3;
        }
        if ((+range) === 2) {
            a_riasec += 2;
            e_riasec += 2;
        }


        let qns_prompt = document.getElementById('qns-starter');
        qns_prompt.innerText = ("I am interested in...");
    }

    // console should always print 9, 9, 9, 9
    // console.log("r: ", r_riasec, '\n',
    //     "a: ", a_riasec, '\n',
    //     "e: ", e_riasec, '\n',
    //     "c: ", c_riasec); 

    //  Adding up of score for part 2
    if (qns_counter === 9) {
        if ((+range) === 5) {
            dsf += 5;
            ifs += 4;
            it += 2;
        }
        if ((+range) === 4) {
            dsf += 4;
            ifs += 4;
            it += 2;
        }
        if ((+range) === 3) {
            dsf += 3;
            ifs += 3;
            it += 2;
        }
        if ((+range) === 2) {
            dsf += 2;
            ifs += 2;
            it += 1;
        }
        if ((+range) === 1) {
            bft += 3;
            bia += 3;
        }
    }

    if (qns_counter === 10) {
        if ((+range) === 5) {
            ifs += 5;
            it += 5;
            bia += 2;
        }
        if ((+range) === 4) {
            ifs += 4;
            it += 4;
            bia += 2;
        }
        if ((+range) === 3) {
            ifs += 3;
            it += 3;
            bia += 2;
        }
        if ((+range) === 2) {
            ifs += 2;
            it += 2;
            bia += 2;
        }
    }

    if (qns_counter === 11) {
        if ((+range) === 5) {
            it += 5;
            bft += 5;
            bia += 3;
        }
        if ((+range) === 4) {
            it += 4;
            bft += 4;
            bia += 3;
        }
        if ((+range) === 3) {
            it += 3;
            bft += 3;
            bia += 3;
        }
        if ((+range) === 2) {
            it += 2;
            bft += 2;
            bia += 2;
        }
        if ((+range) === 1) {
            dsf += 3;
            ifs += 3;
        }
    }

    if (qns_counter === 12) {
        if ((+range) === 5) {
            dsf += 3;
            bft += 4;
            bia += 5;
        }
        if ((+range) === 4) {
            dsf += 3;
            bft += 4;
            bia += 4;
        }
        if ((+range) === 3) {
            dsf += 3;
            bft += 3;
            bia += 3;
        }
        if ((+range) === 2) {
            dsf += 2;
            bft += 2;
            bia += 2;
        }
    }

    if (qns_counter === 13) {
        if ((+range) === 5) {
            bft += 5;
            bia += 5;
        }
        if ((+range) === 4) {
            bft += 4;
            bia += 4;
        }
        if ((+range) === 3) {
            bft += 3;
            bia += 3;
        }
        if ((+range) === 2) {
            bft += 2;
            bia += 2;
        }
        if ((+range) === 1) {
            dsf += 3;
            ifs += 3;
        }
    }

    if (qns_counter === 14) {
        if ((+range) === 5) {
            it += 5;
            bft += 3;
            bia += 3;
        }
        if ((+range) === 4) {
            it += 4;
            bft += 3;
            bia += 3;
        }
        if ((+range) === 3) {
            it += 3;
            bft += 3;
            bia += 3;
        }
        if ((+range) === 2) {
            it += 2;
            bft += 2;
            bia += 2;
        }
    }

    if (qns_counter === 15) {
        if ((+range) === 5) {
            it += 5;
            bft += 5;
            bia += 2;
        }
        if ((+range) === 4) {
            it += 4;
            bft += 4;
            bia += 2;
        }
        if ((+range) === 3) {
            it += 3;
            bft += 3;
            bia += 2;
        }
        if ((+range) === 2) {
            it += 2;
            bft += 2;
            bia += 2;
        }
    }
}

function calculateRIASEC() {
    // calcualate dsf part 1
    let r_dsf = (r_riasec / 15);
    if (r_dsf >= 15) {
        r_dsf = 1
    };

    let a_dsf = ((15 - a_riasec) / 15);
    let e_dsf = ((15 - e_riasec) / 15);

    let c_dsf = (c_riasec / 15);
    if (c_dsf >= 15) {
        c_dsf = 1
    };

    let dsf_part_1 = (r_dsf + a_dsf + e_dsf + c_dsf) * 5

    // calculate dcs part 1
    let r_dcs = (r_riasec / 10);
    if (r_dcs >= 10) {
        r_dcs = 1;
    };

    let c_dcs = (c_riasec / 15);
    if (c_dcs >= 15) {
        c_dcs = 1;
    };

    let e_dcs = (e_riasec / 10);
    if (e_dcs >= 10) {
        e_dcs = 1;
    }

    let dcs_part_1 = (((15 - a_riasec) / 15) + e_dcs + c_dcs + r_dcs) * 5

    // calculate dit part 1
    let r_dit = (r_riasec / 15);
    if (r_dit > 15) {
        r_dit = 1;
    }

    let a_dit = (a_riasec / 15);
    if (a_dit > 15) {
        a_dit = 1;
    }

    let e_dit = (e_riasec / 13);
    if (e_dit > 13) {
        e_dit = 1;
    }

    let dit_part_1 = (((15 - c_riasec) / 15) + e_dit + a_dit + r_dit) * 5

    // calculate dbft part 1
    let a_dbft = (a_riasec / 15);
    if (a_dbft > 15) {
        a_dbft = 1;
    }

    let e_dbft = (e_riasec / 15);
    if (e_dbft > 15) {
        e_dbft = 1;
    }

    let c_dbft = (c_riasec / 10);
    if (c_dbft > 10) {
        c_dbft = 1;
    }

    let dbft_part_1 = (((15 - r_riasec) / 15) + c_dbft + e_dbft + a_dbft) * 5

    // calculate dba part 1 
    let r_dba = (r_riasec / 10);
    if (r_dba > 10) {
        r_dba = 1;
    }

    let a_dba = (a_riasec / 10)
    if (a_dba > 10) {
        a_dba = 1;
    }

    let e_dba = (e_riasec / 15)
    if (e_dba > 15) {
        e_dba = 1;
    }

    let c_dba = (c_riasec / 15)
    if (c_dba > 15) {
        c_dba = 1;
    }
    let dba_part_1 = (c_dba + e_dba + a_dba + r_dba) * 5

    console.log("dsf: ", dsf_part_1, '\n',
        "dcs: ", dcs_part_1, '\n',
        "dit: ", dit_part_1, '\n',
        "dbft: ", dbft_part_1, '\n',
        "dba: ", dba_part_1);
}

// Redirecting webpage
function submit() {
    let range = document.getElementById("myRange").value; // setting var of user's answer

    if ((+range) === 5) {
        dsf += 5;
        ifs += 4;
    }
    if ((+range) === 4) {
        dsf += 4;
        ifs += 4;
    }
    if ((+range) === 3) {
        dsf += 3;
        ifs += 3;
    }
    if ((+range) === 2) {
        dsf += 2;
        ifs += 2;
    }

    calculateDiplomaFinal();

    window.transitionToPage = function(href) {
        document.querySelector('body').style.opacity = 0
        setTimeout(function() {
            window.location.href = href
        }, 500)
    }

    document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('body').style.opacity = 1
    })

    if (assignDiploma() === "bia") {
        transitionToPage("/templates/bia");
    }

    if (assignDiploma() === "bft") {
        transitionToPage("/templates/bft");
    }

    if (assignDiploma() === "ifs") {
        transitionToPage("/templates/ifs");
    }

    if (assignDiploma() === "it") {
        transitionToPage("/templates/it");
    }

    if (assignDiploma() === "dsf") {
        transitionToPage("/templates/dsf");
    }
}

function calculateDiplomaFinal() {
    // calcualate dsf part 1
    let r_dsf = (r_riasec / 15);
    let a_dsf = ((15 - a_riasec) / 15);
    let e_dsf = ((15 - e_riasec) / 15);
    let c_dsf = (c_riasec / 15);
    let dsf_part_1 = (r_dsf + a_dsf + e_dsf + c_dsf) * 5

    // calculate dcs part 1
    let dcs_part_1 = ((r_riasec / 10) + ((15 - a_riasec) / 15) + (e_riasec / 10) + (c_riasec / 15)) * 5

    // calculate dit part 1
    let dit_part_1 = ((r_riasec / 15) + (a_riasec / 15) + (e_riasec / 13) + ((15 - c_riasec) / 15)) * 5

    // calculate dbft part 1
    let dbft_part_1 = (((15 - r_riasec) / 15) + (a_riasec / 15) + (e_riasec / 15) + (c_riasec / 10)) * 5

    // calculate dba part 1 
    let dba_part_1 = ((r_riasec / 10) + (a_riasec / 10) + (e_riasec / 15) + (c_riasec / 15)) * 5

    console.log("dsf: ", dsf_part_1, '\n',
        "dcs: ", dcs_part_1, '\n',
        "dit: ", dit_part_1, '\n',
        "dbft: ", dbft_part_1, '\n',
        "dba: ", dba_part_1);

    dsf_final = dsf + dsf_part_1;
    dcs_final = ifs + dcs_part_1;
    dit_final = it + dit_part_1;
    dbft_final = bft + dbft_part_1;
    dba_final = bia + dba_part_1;

    console.log("dsf final: ", dsf_final, '\n',
        "dcs final: ", dcs_final, '\n',
        "dit final: ", dit_final, '\n',
        "dbft final: ", dbft_final, '\n',
        "dba final: ", dba_final);

    assignDiploma();
}

// Assigning scores based on diploma 
function assignDiploma() {
    const array_of_diplomas = [dsf_final, dcs_final, dit_final, dbft_final, dba_final];
    let max = Math.max(...array_of_diplomas);

    if (max == dba_final) {
        // alert("We recommend the Diploma in Business Intelligence and Analytics for you!")
        return ("bia");
    }

    if (max == dbft_final) {
        // alert("We recommend the Diploma in Business Financial Technology for you!")
        return ("bft");

    }

    if (max == dcs_final) {
        // alert("We recommend the Diploma in Information Security for you!")
        return ("ifs");

    }

    if (max == dit_final) {
        // alert("We recommend the Diploma in Information Technology for you!")
        return ("it");

    }

    if (max == dsf_final) {
        // alert("We recommend the Diploma in Cyber Forensics for you!")
        return ("dsf");
    }
}

// function myFunction() {
//     alert("Complete a series of 16 questions so we can help you find a suitable diploma!")
// }