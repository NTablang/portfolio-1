AOS.init({
    duration: 1200,
})
const links = document.querySelectorAll("#cont");
const hoverAudio = document.getElementById("hover");
const soundToggle = document.getElementById("sound-toggle");
const colorToggle = document.getElementById("color-toggle");
const root = document.querySelector(':root');
const rs = getComputedStyle(root);
const myPhoto = document.getElementById("me");
const footer = document.querySelector(".footer");
const copyright = document.getElementById("copyright")
const aboutPic = document.getElementById("pic");
const sites = document.querySelectorAll("#site");
const descs = document.querySelectorAll(".desc");
const selections = document.querySelectorAll(".selection");
const selections1 = document.querySelectorAll(".selection-1");

let currentLeadership = "StartUp Shell";
let currentEducation = "University of Maryland, College Park";

const posts = document.querySelectorAll(".post");
const posts1 = document.querySelectorAll(".post-1");


selections.forEach((selection) => {
    selection.style.borderLeft = "1px solid white";
    let currentColorScheme = rs.getPropertyValue('--text-color');

    if (selection.textContent == currentLeadership) {
        selection.style.borderLeft = `1px solid ${currentColorScheme}`;
        selection.style.color = currentColorScheme;

    }
    console.log(selection.textContent);
    selection.addEventListener("click", (e) => {
        currentLeadership = selection.textContent;
        selections.forEach(selection => {
            selection.style.borderLeft = `1px solid white`;
            selection.style.color = "white";
        })
        currentColorScheme = rs.getPropertyValue('--text-color');
        if (selection.textContent == currentLeadership) {
            selection.style.borderLeft = `1px solid ${currentColorScheme}`;
            selection.style.color = currentColorScheme;
    
        }
        console.log("check");
        console.log(selection.textContent);

        switch (selection.textContent) {
            case "StartUp Shell": 
                posts.forEach(post => {
                    console.log(post.id);
                    if (post.id == "startup") {
                        post.style.display = "inline";
                    }
                    else post.style.display = "none";
                }); break;
            case "First-Year Innovation and Research Experience (FIRE)": 
                posts.forEach(post => {
                    console.log(post.id);
                    if (post.id == "fire") {
                        post.style.display = "inline";
                    }
                    else post.style.display = "none";
                }); break;
            case "NHS": 
                posts.forEach(post => {
                    console.log(post.id);
                    if (post.id == "national-honor") {
                        post.style.display = "inline";
                    }
                    else post.style.display = "none";
                }); break;
            case "SGA": 
                posts.forEach(post => {
                    console.log(post.id);
                    if (post.id == "student-council") {
                        post.style.display = "inline";
                    }
                    else post.style.display = "none";
                }); break;
            case "MHS": 
                posts.forEach(post => {
                    console.log(post.id);
                    if (post.id == "math") {
                        post.style.display = "inline";
                    }
                    else post.style.display = "none";
                }); break;
                
        }
    })
})

selections1.forEach((selection1) => {
    selection1.style.borderLeft = "1px solid white";
    let currentColorScheme = rs.getPropertyValue('--text-color');

    if (selection1.textContent == currentEducation) {
        selection1.style.borderLeft = `1px solid ${currentColorScheme}`;
        selection1.style.color = currentColorScheme;

    }
    selection1.addEventListener("click", (e) => {
        currentEducation = selection1.textContent;
        selections1.forEach(selection1 => {
            selection1.style.borderLeft = `1px solid white`;
            selection1.style.color = "white";
        })
        currentColorScheme = rs.getPropertyValue('--text-color');
        if (selection1.textContent == currentEducation) {
            selection1.style.borderLeft = `1px solid ${currentColorScheme}`;
            selection1.style.color = currentColorScheme;
    
        }

        switch (selection1.textContent) {
            case "University of Maryland, College Park": 
                posts1.forEach(post1 => {
                    console.log(post1.id);
                    if (post1.id == "umd") {
                        post1.style.display = "inline";
                    }
                    else post1.style.display = "none";
                }); break;
            case "Montgomery College, Rockville": 
                posts1.forEach(post1 => {
                    console.log(post1.id);
                    if (post1.id == "mc") {
                        post1.style.display = "inline";
                    }
                    else post1.style.display = "none";
                }); break;       
        }
    })
})





let currentColorScheme = rs.getPropertyValue('--text-color');



// default is violet scheme
sites.forEach((site) => {
    currentColorScheme = rs.getPropertyValue('--text-color');
    site.classList.add("pic-violet-scheme");
    site.addEventListener("mouseover", () => {
        site.classList.remove("pic-violet-scheme");
        site.classList.remove("pic-orange-scheme");
    })
    site.addEventListener("mouseleave", () => {
        currentColorScheme = rs.getPropertyValue('--text-color');
        if (currentColorScheme == "#FF5F1F") {
            site.classList.remove("pic-violet-scheme");
            site.classList.add("pic-orange-scheme");

        }
        else {
            site.classList.remove("pic-orange-scheme");
            site.classList.add("pic-violet-scheme");
        }
    })
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

footer.addEventListener("mouseover", () => {
    copyright.style.display = "inline";

})
footer.addEventListener("mouseleave", () => {
    copyright.style.display = "none";

})


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
hoverAudio.muted = ""
links.forEach(link => {
    link.addEventListener("mouseover", () => {
        
        hoverAudio.play();

    })
})
soundToggle.addEventListener("click", () => {
    
    if (soundToggle.style.color == "white") {
        soundToggle.style.color = "#ffffff63";
        soundToggle.textContent = "X sound off";
        hoverAudio.muted = "muted";

    }
    else {
        soundToggle.style.color = "white";
        soundToggle.textContent = "O sound on";
        hoverAudio.muted = "";

    }

})
// violet scheme by default
aboutPic.classList.add("pic-violet-scheme");
/*
descs.forEach((desc) => {
    desc.classList.add("bg-violet-scheme");


})*/

colorToggle.addEventListener("click", () => {
    currentColorScheme = rs.getPropertyValue('--text-color');
    descs.forEach((desc) => {
        console.log(currentColorScheme);
        /*
        if (currentColorScheme == "#FF5F1F") {

            desc.classList.remove("bg-orange-scheme");
            desc.classList.add("bg-violet-scheme");
    
        }
        else {
            console.log("here");
            desc.classList.remove("bg-violet-scheme");
            desc.classList.add("bg-orange-scheme");
    
    
        }
        */
    
    })
    // if the current scheme is brown-orange
    if (rs.getPropertyValue('--text-color') == "#FF5F1F") {
        root.style.setProperty('--bg-color', '#000436');
        root.style.setProperty('--text-color', 'magenta');
        root.style.setProperty('--box-color', '#0c1047');

        myPhoto.src = "me1.png";
        aboutPic.classList.remove("pic-orange-scheme");
        aboutPic.classList.add("pic-violet-scheme");
        sites.forEach((site) => {
            site.classList.add("pic-violet-scheme");
        })
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'me1.png';
    }
    // if the current scheme is blue-magenta
    else {
        root.style.setProperty('--bg-color', '#1f1919');
        root.style.setProperty('--text-color', '#FF5F1F');
        root.style.setProperty('--box-color', '#2c2424');

        myPhoto.src = "me2.png";
        aboutPic.classList.remove("pic-violet-scheme");
        aboutPic.classList.add("pic-orange-scheme");

        sites.forEach((site) => {
            site.classList.add("pic-orange-scheme");
        })
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'me2.png';

    }
    selections.forEach(selection => {
        currentColorScheme = rs.getPropertyValue('--text-color');
        if (selection.textContent == currentLeadership) {
            selection.style.borderLeft = `1px solid ${currentColorScheme}`;
            selection.style.color = currentColorScheme;
    
        }
    })
    selections1.forEach(selection1 => {
        currentColorScheme = rs.getPropertyValue('--text-color');
        if (selection1.textContent == currentEducation) {
            selection1.style.borderLeft = `1px solid ${currentColorScheme}`;
            selection1.style.color = currentColorScheme;
    
        }
    })

})
