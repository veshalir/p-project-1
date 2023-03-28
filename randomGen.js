function generateRandomMessage()
{
    let randNum = Math.ceil(Math.random()*8);
    
    switch(randNum)
    {
        case 1: console.log('You will have a great day');
            break;
        case 2: console.log('You will have a bad day');
            break;
        case 3: console.log('A big suprise will be coming soon');
            break;
        case 4: console.log('Watch your back, betrayal is never expected');
            break;
        case 5: console.log('You will have alot of fortune today');
            break;
        case 6: console.log('You will meet someone that will chnage your life');
            break;
        case 7: console.log('You have been.....');
            break;
            default:console.log('I am a robot');
    }
}

generateRandomMessage();