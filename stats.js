//Start
function Laden() {
    Info1.innerHTML = "Laden...";
    Info2.innerHTML = "Laden...";
    Info3.innerHTML = "Laden...";
    Info4.innerHTML = "Laden...";
    Info5.innerHTML = "Laden...";
    Info6.innerHTML = "Laden...";
    Info7.innerHTML = "Laden...";
    Info8.innerHTML = "Laden...";
    Info9.innerHTML = "Laden...";
    Info10.innerHTML = "Laden...";
};


//Infos
const Auswähler = document.getElementById("auswähler");
const Info1 = document.getElementById("info1");
const Info2 = document.getElementById("info2");
const Info3 = document.getElementById("info3");
const Info4 = document.getElementById("info4");
const Info5 = document.getElementById("info5");
const Info6 = document.getElementById("info6");
const Info7 = document.getElementById("info7");
const Info8 = document.getElementById("info8");
const Info9 = document.getElementById("info9");
const Info10 = document.getElementById("info10");
//API Optionen
const optionsINSTA = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'instagram174.p.rapidapi.com',
		'X-RapidAPI-Key': '40e11f4107msh0e53b58956ea300p1a0387jsn3edb477d2f16'
	}
};
const optionsTT = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'tiktok28.p.rapidapi.com',
        'X-RapidAPI-Key': '40e11f4107msh0e53b58956ea300p1a0387jsn3edb477d2f16'
    }
};
const optionsTTV = {
    method: "GET",
    headers: {
        "Authorization": "Bearer kcuazmf8jnsiza8u0sved4jy6mobmr",
        "Client-Id": "58dl0mggj9dqtkh7ac2rk7hyesidal"
    }
};
const optionsYT = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'youtube-data-scraper.p.rapidapi.com',
		'X-RapidAPI-Key': '40e11f4107msh0e53b58956ea300p1a0387jsn3edb477d2f16'
	}
};
const optionsBS = {
    method: "GET",
    headers: {
        "Access-Control-Allow-Origion" : "*",
        "Accept": "application/json",
        "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZmNGQxZjdiLTA0MDMtNDlhNS1iNjQ0LThiOGVjMWEzMTJlZiIsImlhdCI6MTY1Mzg0NDc5Mywic3ViIjoiZGV2ZWxvcGVyLzlmODQ1YmY3LTNjYmItMTkyNS00MDhkLTM3YzZmOTExYzYzOCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNDUuNzkuMjE4Ljc5Il0sInR5cGUiOiJjbGllbnQifV19.GPrG3Xh90XqNf_2bI6oDhtr0M79Hsd3FdaOMvE3gtP7vOTP6TPklIHeLkyECjIRgiPfdPP2ppwHFAeqQbvDFaw",
    }
};
//API Funktionen

function InstaData() {
    fetch('https://instagram174.p.rapidapi.com/api/v1/user/40640989528/info', optionsINSTA)
	    .then(response => response.json())
	    .then(data =>{
            Info1.innerHTML = "Name: <strong>" + data.result.username + "</strong>";
            Info2.innerHTML = "Beschreibung: <strong>" + data.result.biography + "</strong>";
            Info3.innerHTML = "Follower: <strong>" + data.result.follower_count + " Follower</strong>";
            Info4.innerHTML = "Damn folgt <strong>" + data.result.following_count + "</strong> Menschen auf Instagram";
            Info5.innerHTML = "Externer Link: <strong><a href='" + data.result.external_url + "'>Klick hier</a></strong>";
            Info6.innerHTML = "Profilbild: <img src='" + data.result.profile_pic_url + "'>";
            Info7.innerHTML = "Namensbeschreibung: <strong>" + data.result.full_name + "</strong>";
            Info8.innerHTML = "<a href='https://www.instagram.com/damnchaotix/'>Hier gehts zum Kanal!</a>";
            Info9.innerHTML = "Mehr Daten sind leider nicht vorhanden, wenn du noch Vorschläge hast, schreib gerne eine Mail an leon.cool.item@gmail.com";
            Info10.innerHTML = "Mehr Daten sind leider nicht vorhanden, wenn du noch Vorschläge hast, schreib gerne eine Mail an leon.cool.item@gmail.com";
        })
	    .catch(err => console.error(err));
};
function TikTokData() {
    fetch('https://tiktok28.p.rapidapi.com/profile/damnchaotix?schemaType=1', optionsTT)
        .then(response => response.json())
        .then(data => {
            Info1.innerHTML = "Name: <strong>" + data.user.nickname + "</strong>";
            Info2.innerHTML = "Follower: <strong>" + data.stats.followerCount + " Follower</strong>"
            Info3.innerHTML = "Herzen: <strong>" + data.stats.heartCount + " Herzen</strong>";
            Info4.innerHTML = "Videos: <strong>" + data.stats.videoCount + " Videos</strong>";
            Info5.innerHTML = "Unterschrift: <strong>" + data.user.signature + "</strong>";
            Info6.innerHTML = "Verifizierungsstatus: <strong>" + data.user.verified + "</strong>";
            Info7.innerHTML = "Biographylink: <strong><a href='" + data.user.bioLink.link + "'>LinkTree</a>";
            Info8.innerHTML = "Profilbild: <img src='" + data.user.avaterThumb + "'>";
            Info9.innerHTML = "ID: <strong>" + data.user.uniqueId + "</strong>";
            Info10.innerHTML = "Damn folgt <strong>" + data.stats.followingCount + "</strong> anderen Menschen";
        })
        .catch(err => console.log(err));
};
function TwitchData() {
    fetch("https://api.twitch.tv/helix/users?id=542388627", optionsTTV)
    .then(res => res.json())
    .then(data => {
        Info1.innerHTML = "Name: <strong>"+data.data[0].display_name+"</strong>";
        Info2.innerHTML = "Beschreibung: <strong>"+data.data[0].description+"</strong>";
        Info3.innerHTML = "Profilbild: <img src='"+data.data[0].profile_image_url+"'>";
        Info4.innerHTML = "Kanaltyp: <strong>"+data.data[0].broadcaster_type+"</strong>";
        Info5.innerHTML = "Aufrufe: <strong>"+data.data[0].view_count+" Aufrufe</strong>";
        Info6.innerHTML = "<a class='link P' href='https://twitch.tv/damnchaotix'>Klicke hier um zum Kanal zu kommen</a>";
    })
    .catch(err => console.log(err))
    fetch("https://api.twitch.tv/helix/users/follows?to_id=542388627", optionsTTV)
    .then(res => res.json())
    .then(data => {
        Info7.innerHTML = "Follower: <strong>"+data.total+" Follower</strong>";
    })
    .catch(err => console.log(err))
    Info8.innerHTML = "Mehr Daten sind leider nicht vorhanden, wenn du noch Vorschläge hast, schreib gerne eine Mail an leon.cool.item@gmail.com";
    Info9.innerHTML = "Mehr Daten sind leider nicht vorhanden, wenn du noch Vorschläge hast, schreib gerne eine Mail an leon.cool.item@gmail.com";
    Info10.innerHTML = "Mehr Daten sind leider nicht vorhanden, wenn du noch Vorschläge hast, schreib gerne eine Mail an leon.cool.item@gmail.com";
}
function YouTubeData() {
    fetch('https://youtube-data-scraper.p.rapidapi.com/channel/UCv2AU57WX19Zwt85TxSuVPQ', optionsYT)
	.then(response => response.json())
	.then(data => {
        Info1.innerHTML = "Name: <strong>" + data.items[0].snippet.title +"</strong>";
        Info2.innerHTML = "Beschreibung: <strong>" + data.items[0].snippet.description + "</strong>";
        Info3.innerHTML = "Abonnenten: <strong>" + data.items[0].statistics.subscriberCount + " Abonnenten</strong>";
        Info4.innerHTML = "Aufrufe: <strong>" + data.items[0].statistics.viewCount + " Aufrufe</strong>";
        Info5.innerHTML = "Videos: </strong>" + data.items[0].statistics.videoCount + " Videos</strong>";
        Info6.innerHTML = "Kanalprivatsphäre: <strong>" + data.items[0].status.privacyStatus + "</strong>";
        Info7.innerHTML = "Registrierungsland: <strong>" + data.items[0].brandingSettings.channel.country + "</strong>";
        Info8.innerHTML = "Profilbild: <img src='" + data.items[0].snippet.thumbnails.default.url + "'>";
        Info9.innerHTML = "Kanalid: <strong>" + data.items[0].id + "</strong>";
        Info10.innerHTML = "<a href='https://www.youtube.com/c/DamnChaotix'>Hier gehts zum Kanal</a>";
    })
	.catch(err => console.log(err));


}
function BrawlStarsData() {
    fetch("https://api.brawlstars.com/v1/players/%232YCPG0U0", optionsBS)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Info1.innerHTML = "Name: <strong>" + data.name + "</strong>";
            Info2.innerHTML = "Tag: <strong>" + data.tag + "</strong>";
            Info3.innerHTML = "aktuelle Trophäen: <strong>" + data.trophies + " 🏆</strong>";
            Info4.innerHTML = "höchste Trophäen: <strong>" + data.highestTrophies + " 🏆</strong>";
            Info5.innerHTML = "XP Level: <strong>" + data.expLevel + "</strong>";
            Info6.innerHTML = "3-gegen-3 Siege: <strong>" + data[10] + " Siege</strong>";
            Info7.innerHTML = "Solo Siege: <strong>" + data.soloVictories + " Siege</strong>";
            Info8.innerHTML = "Duo Siege: <strong>" + data.duoVictories + " Siege</strong>";
            Info9.innerHTML = "Club Name: <strong>" + data.club.name + "</strong>";
            Info10.innerHTML = "Club Tag: <strong>" + data.club.tag + "</strong>";
        })
        .catch(err => console.log(err))
}
function NichtLaden() {
    Info1.innerHTML = "Coming Soon...";
    Info2.innerHTML = "Coming Soon...";
    Info3.innerHTML = "Coming Soon...";
    Info4.innerHTML = "Coming Soon...";
    Info5.innerHTML = "Coming Soon...";
    Info6.innerHTML = "Coming Soon...";
    Info7.innerHTML = "Coming Soon...";
    Info8.innerHTML = "Coming Soon...";
    Info9.innerHTML = "Coming Soon...";
    Info10.innerHTML = "Coming Soon...";
}
//Updates
function Update() {
    if (Auswähler.value == "1") {
        Laden();
        TwitchData();
    } else if (Auswähler.value == "2") {
        Laden();
        InstaData();
    } else if (Auswähler.value == "3") {
        Laden();
        TikTokData();
    } else if (Auswähler.value == "4") {
        Laden();
        YouTubeData();
    } else if (Auswähler.value == "5") {
        Laden();
        DiscordData();
    } else if (Auswähler.value == "6") {
        NichtLaden();
        BrawlStarsData();
    }
}
TwitchData();