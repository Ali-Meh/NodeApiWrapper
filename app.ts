import net from 'net'


var client = new net.Socket();
client.connect(1898, '127.0.0.1', function() {
    console.log('Connected');
    client.setKeepAlive(true);    
    client.write('Hel\n');
    // client.push(Buffer.from("Hello, server! Love, Client.","ascii"));
    // client.resume();
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    
    let buff = Buffer.from(data.toString(), 'base64');
    let text = buff.toString('ascii');
    console.log(text);
    let buf=Buffer.from(`8-7`).toString('base64');
    console.log(buf);+
    
    client.write(buf+'\n');

    // client.end();
	// client.destroy(); // kill client after server's response
});


client.on('close', function() {
	console.log('Connection closed');
});




