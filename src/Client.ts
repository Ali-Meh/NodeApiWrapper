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

        for(let i=0;i<9;i++){
            this.map[i]=new Array<string>();
        }

        this.client.on("data",(data)=>{
            this.prepateMap(data);
        })

        this.client.on("close",(err)=>{
            console.log("close");
            
            process.exit(0);
        })
        this.client.on("error",()=>{
            process.exit(0);
        })
        this.client.on("end",()=>{
            process.exit(0);
        })
    }
    prepateMap(data: Buffer): any {
        let rawMap=this.Decrypt(data);
        console.log(rawMap);
        let j=0;
        
        for(let i=rawMap.indexOf("@");i<rawMap.length;i++){
            if(rawMap[i]==='\n'){
                j++;
                continue;
            }
            if(j>8)
                return;
            this.map[j][((i-rawMap.indexOf("@")))%10]=rawMap[i];
        }
        // this.map=this.transpose(this.map);
        
        return this.map;
    }
    transpose(matrix:string[][]) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
      }

    private Decrypt(msg:Buffer){
        let buff = Buffer.from(msg.toString(), 'base64');
        return buff.toString('ascii');
    }
}