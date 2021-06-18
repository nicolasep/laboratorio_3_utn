class Consultas
{
    public ejecutarGet(url:string, listerCallback:ResponseGet)
    {
        let xlm = new XMLHttpRequest();
        xlm.onreadystatechange =()=>{
            if(xlm.readyState === 4){
                listerCallback.response(xlm.status, xlm.responseText);
            }
        }
        xlm.open("GET",url,true);
        xlm.send();
    }
}