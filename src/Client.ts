import net from 'net'

export class client{
    name:string;
    private client:net.Socket;
    map:string[][];
    temp:any;

    private static availibleClients:client[]=new Array();
    public Send(params:string) {
        let buf=Buffer.from(params).toString('base64');
        console.log(buf);+
        this.client.write(buf+'\n');
    }

    public static build(name:string){
        let clint;
        client.availibleClients.forEach((c)=>{
            console.log(`client with the name ${c.name} ${c.name===name} ${c.name}`);
            if(c.name===name){
                clint=c;
                return;
            }
        })
        if(clint)
            return clint;
        if(client.availibleClients.length>2)
            return null;
        return new client(name,process.env.URL+"",Number(process.env.PORT));
    }


    /**
     *
     */
    private constructor(name:string,url:string,port:number) {
        this.name=name;
        this.client=new net.Socket();
        this.map=new Array<Array<string>>();


        this.client.connect(port, url, ()=>{
            console.log('Connected');
            this.client.setKeepAlive(true);    
            this.client.write(`${this.name}\n`);
            // client.push(Buffer.from("Hello, server! Love, Client.","ascii"));
            // client.resume();
        })
        client.availibleClients.push(this);

        this.client.on("data",(data)=>{
            this.temp=this.Decrypt(data);
        })
    }

    private Decrypt(msg:Buffer){
        let buff = Buffer.from(msg.toString(), 'base64');
        return buff.toString('ascii');
    }
}