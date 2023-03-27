
let month = document.querySelector('#birthdayMonth').value
let day = Number(document.querySelector('#birthday').value)

document.querySelector('#check').addEventListener('click', zodiacMaster)


function zodiacMaster(month, day){

        let zodiacSign ="";
        month = document.querySelector('#birthdayMonth').value.toLowerCase()
        day = Number(document.querySelector('#birthday').value)
            
        if ( month == "december" || month == "dec"){
            if (day < 22)
            zodiacSign = "Sagittarius ♐ extroverted, optimistic, funny and generous"
            else
            zodiacSign = "Capricorn ♑ serious, independent, disciplined and tenacious";
        }
                
        else if (month == "january" || month == "jan"){
            if (day < 20)
            zodiacSign = "Capricorn ♑ serious, independent, disciplined and tenacious";
            else
            zodiacSign = "Aquarius ♒ deep, imaginative, original and uncompromising";
        }
                
        else if (month == "february" || month == "feb"){
            if (day < 19)
            zodiacSign = "Aquarius ♒ deep, imaginative, original and uncompromising";
            else
            zodiacSign = "Pisces ♓ affectionate, empathetic, wise and artistic";
        }
                
        else if(month == "march"){
            if (day < 21) 
            zodiacSign = "Pisces ♓ affectionate, empathetic, wise and artistic";
            else
            zodiacSign = "Aries ♈ eager, dynamic, quick and competitive";
        }

        else if (month == "april"){
            if (day < 20)
            zodiacSign = "Aries ♈ eager, dynamic, quick and competitive";
            else
            zodiacSign = "Taurus ♉ strong, dependable, sensual and creative";
        }
                
        else if (month == "may"){
            if (day < 21)
            zodiacSign = "Taurus ♉ strong, dependable, sensual and creative";
            else
            zodiacSign = "Gemini ♊ versatile, expressive, curious and kind";
        }
                
        else if( month == "june"){
            if (day < 21)
            zodiacSign = "Gemini ♊ versatile, expressive, curious and kind";
            else
            zodiacSign = "Cancer ♋ intuitive, sentimental, compassionate and protective";
        }
                
        else if (month == "july"){
            if (day < 23)
            zodiacSign = "Cancer ♋ intuitive, sentimental, compassionate and protective";
            else
            zodiacSign = "Leo ♌ dramatic, outgoing, fiery and self-assured";
        }
                
        else if( month == "august" || month == "aug"){
            if (day < 23) 
            zodiacSign = "Leo ♌ dramatic, outgoing, fiery and self-assured";
            else
            zodiacSign = "Virgo ♍ practical, loyal, gentle and analytical";
        }
                
        else if (month == "september" || month == "sept"){
            if (day < 23)
            zodiacSign = "Virgo ♍ practical, loyal, gentle and analytical";
            else
            zodiacSign = "Libra ♎ social, fair-minded, diplomatic and gracious";
        }
                
        else if (month == "october" || month == "oct"){
            if (day < 23)
            zodiacSign = "Libra ♎ social, fair-minded, diplomatic and gracious";
            else
            zodiacSign = "Scorpio ♏ passionate, stubborn, resourceful and brave";
        }
                
        else if (month == "november" || month == "nov"){
            if (day < 22)
            zodiacSign = "Scorpio ♏ passionate, stubborn, resourceful and brave";
            else
            zodiacSign = "Sagittarius ♐ extroverted, optimistic, funny and generous";
        }
                
        document.querySelector('#placeToSee').innerText = zodiacSign
    }