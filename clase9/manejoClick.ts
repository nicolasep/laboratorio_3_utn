class ManejoClick implements EventListenerObject
{
    main: Main;
    constructor(main: Main)
    {
        this.main = main;
    }
    public handleEvent(ev:Event)
    {
        this.main.animal.setPatas(2);
    }
}