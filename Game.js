const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    YES:  Symbol("yes"),
    WAIT: Symbol("wait"),
    STOP_USING: Symbol("stop_using "),
    SHOUT: Symbol("shout"),
    NO: Symbol("no"),
    NEEDHELP:  Symbol("needhelp"),
    WAITT: Symbol("waitt"),
    NOTIMMEDIATELY: Symbol("notimmediately"),
    YESS: Symbol("yess"),
    NOO: Symbol("noo"),
    YESSS:  Symbol("yesss"),
    SURE: Symbol("sure"),
    YUP: Symbol("yup"),
    SURELY: Symbol("surely"),
    QUIT: Symbol("quit"),
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is a dark and rainy night and you are alone at home and suddenly electrecity gone and you are scared to be alone in darkness need help yes or not?";
                this.stateCur = GameState.YES;
                break;

            case GameState.YES:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "no one near by you to make to comfartable.Do you keep wait or call poilce?"
                    this.stateCur=GameState.WAIT
                }else{
                    sReply ="you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;
                }
                break;

            case GameState.WAIT:
                if(sInput.toLowerCase().match("wait")){
                    sReply =
                    " your mobile phone battery low do you keep using your phone or syop_using to make an emergency call?"
                    this.stateCur = GameState.STOP_USING;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;
                }
                break;

            case GameState.STOP_USING:
                if(sInput.toLowerCase().match("stop_using")){
                    sReply = "after spending two hours you are still alone. should you wait for someone to come to make you comfortable or start shout for help?";
                    this.stateCur = GameState.SHOUT;

                }else{
                    sReply ="you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;
    
                }
                break;
                case GameState.SHOUT:
                if(sInput.toLowerCase().match("shout")){
                    sReply = " after listening your noise 4 young boy who are overdose came to you and start use unprofesional talk .should you open the door to them or no? ?"
                    this.stateCur = GameState.NO;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.NO:
                if(sInput.toLowerCase().match("no")){
                    sReply = "after getting no response from your side they moved away do you stilll souting for needhelp?"
                    this.stateCur = GameState.NEEDHELP;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.NEEDHELP:
                if(sInput.toLowerCase().match("needhelp")){
                    sReply = "its already 1am no one came there to help you. now you have to options call police or waitt?"
                    this.stateCur = GameState.WAITT;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.WAITT:
                if(sInput.toLowerCase().match("waitt")){
                    sReply = "someone came and knock your door but he is not your relative or known should you open the door or notimmediately?"
                    this.stateCur = GameState.NOTIMMEDIATELY;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.NOTIMMEDIATELY:
                if(sInput.toLowerCase().match("notimmediately")){
                    sReply = "after little talk you found that he is a safe person to help do you open door for him yess or not ?"
                    this.stateCur = GameState.YESS;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.YESS:
                if(sInput.toLowerCase().match("yess")){
                    sReply = "he make you comfortable and ask you to go with him do you go or noo ?"
                    this.stateCur = GameState.NOO;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.NOO:
                if(sInput.toLowerCase().match("noo")){
                    sReply = "ask him to stay with you if you found he is a good human and you have positive waves did you ask yesss or not?"
                    this.stateCur = GameState.YESSS;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.YESSS:
                if(sInput.toLowerCase().match("yesss")){
                    sReply = "he have some candels and portable charger in his car shold you  sure to ask him to bring in?"
                    this.stateCur = GameState.SURE;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.SURE:
                if(sInput.toLowerCase().match("sure")){
                    sReply = "now, its 4am darkness stats removing by sun rising. do you offer him a coffee yup or not?"
                    this.stateCur = GameState.YUP;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.YUP:
                if(sInput.toLowerCase().match("yup")){
                    sReply = "at 6 am your family came back and that person stil with you by seeing a strange person your family start asking about him should you explain everythin surely or not?"
                    this.stateCur = GameState.SURELY;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.SURELY:
                if(sInput.toLowerCase().match("surely")){
                    sReply = "finally, you are safe and everything sorted out. do you want to quit?"
                    this.stateCur = GameState.QUIT;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
                case GameState.QUIT:
                if(sInput.toLowerCase().match("quit")){
                    sReply = "The door opens and you are greeted by a hunch-back butler. He asks you to come in. Do you go in or run back to the car?"
                    this.stateCur = GameState.QUIT;
                }else{
                    sReply = "you are not allow to exit untill all states will not completed";
                    this.stateCur = GameState.NOT_ALLOWED;

                }
                break;
        }
        return([sReply]);
    }
}