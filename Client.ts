import net from 'net';
import { EventEmitter } from 'events';
import * as Util from './Util';
class Client extends EventEmitter{
    address:string;
    port:number;
    clientName:string;
    client:net.Socket;
    map:string[][];
    /**
     *
     */
    constructor(addres:string,port:number,clientN:string) {
        super();
        this.address=addres;
        this.port=port;
        this.clientName=clientN;
        this.client=new net.Socket();
        this.map=new Array<Array<string>>();
    }
    
    public Start(){
        this.client.connect(this.port, this.address,()=>{
            console.log('Connected');
            this.client.setKeepAlive(true);    
            this.client.write(`${this.clientName}\n`);
            // client.push(Buffer.from("Hello, server! Love, Client.","ascii"));
            // client.resume();
            //todo add on answer Listener

            this.client.addListener("data",Util.onAnswerListener);
        });
    }

    public Send(data:string){
        this.client.write(data+'\n');
    }

    public Encrypt(msg:string){
        return Buffer.from(msg).toString('base64');
    }

    public Decrypt(msg:string){
        let buff = Buffer.from(msg, 'base64');
        return buff.toString('ascii');
    }


    public get name() : string {
        return this.clientName;
    }
    
}