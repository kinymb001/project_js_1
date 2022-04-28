
// //khoi tao object nguon
// const kin = {
//     age : 20,
//     name : 'kien',
//     favoriteGame : 'aoshittang ctxd',
//     c : {
//         x : 3,
//         y : 2,
//     },
// };


// //khoi tao oject dich
// var b = {};

// //ham xu ly viec copy thuoc tinh tu object nguon sang object dich
// function copyObject(a){
//     for(let key in a){
 
//         b[key] = a[key];
//        // else{
//             //copyObject(a[key]);
//         //}
//     }
// };

// //console.log(typeof kin);
// // if(typeof kin === 'Object'){
// //     console.log('aaaa');
// // }
// //goi ham
// copyObject(kin);

// //kiem tra kq
// b.c.x = 30;
// console.log(kin);
// console.log(b);
function Room(roomName) {
    this.roomName = roomName;
    this.members = [];
  
    this.broadcast = function(sender, messageType, message = undefined, ) {
      for (const member of this.members) {
        if (member === sender) continue;
        switch (messageType) {
          case 'subcribe':
            console.log(`Thành viên ${sender.name} đã tham gia phòng ${this.roomName}`);
            break;
          case 'unsubcribe':
            console.log(`Thành viên ${sender.name} đã thoát phòng ${this.roomName}`);
            break;
          case 'message':
            console.log(`Thành viên ${sender.name} đã gửi 1 tin nhắn trong phòng ${this.roomName}: ${message}`);
            break;
          default:
            break;
        }
      }
    };
  }
  
  function Member(name) {
    this.name = name;
    this.joinedRooms = [];
  
    this.subcribe = function(room) {
        // Kiểm tra xem user đã tham gia phòng này chưa
        if (this.joinedRooms.includes(room)) return console.log('Bạn đã tham gia phòng trước đó.');
      this.joinedRooms.push(room);
      room.members.push(this);
      room.broadcast(this, 'subcribe');
    }
  
    this.publish = function(room, message) {
        // Kiểm tra xem user có tham gia phòng chỉ định không
          if (!this.joinedRooms.includes(room)) return console.log('Bạn không tham gia phòng.');
      room.broadcast(this, 'message', message);
    }
    
    this.exit = function(room) {
        // Kiểm tra xem user có tham gia phòng chỉ định không
          if (!this.joinedRooms.includes(room)) return console.log('Bạn không tham gia phòng.');
      const memberIndex = room.members.indexOf(this);
          if (memberIndex > -1) room.members.splice(memberIndex, 1);
          room.broadcast(this, 'unsubcribe');
    }
  }
  
  
  const member1 = new Member('Trung');
  const member2 = new Member('Nam');
  const member3 = new Member('Phương');
  const member4 = new Member('Mai');
  
  const room1 = new Room('Phòng 1');
  const room2 = new Room('Phòng 2');
  
  member1.subcribe(room1);
  member2.subcribe(room1);
  member2.publish(room1, 'Chào mọi người mình là Nam.');
  member1.publish(room1, 'Chào Nam.');
  member3.publish(room1, 'Chào mọi người mình là Phương.');
  member3.subcribe(room2);
  member1.subcribe(room2);
  member3.exit(room2);