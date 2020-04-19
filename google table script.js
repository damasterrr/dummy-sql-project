var server = "sql7.freemysqlhosting.net"
var dbName = "sql7334446"
var username = "sql7334446"
var password = "lBVBetDCax"
var port = 3306

function createConnection() {
var url = "jdbc:mysql://"+server+":"+port+"/"+dbName
var conn = Jdbc.getConnection(url , username, password);
var stmt = conn.createStatement();
var rs = stmt.execute("CREATE TABLE MyGuests(id INT(6), firstname VARCHAR(20))");

Logger.log(conn)
conn.close();
}