const student = []

function room(roomName){
    this.roomName = roomName;

    this.broadcast = function(message){
        console.log(message)
    }
}

function member (name, room){
    this.name = name
    this.subcribe = function(){
        this.name = name
        student.push({
            name: this.name,
            class: room.roomName
        })
    }

    this.publish = function(message){
        student.forEach((student, index) => {
            if(student.name === this.name && student.class === room.roomName){
                var mess = `${student.name}(${this.roomName}): ${message}`
                room.broadcast(mess)
            }
        })
    }

    student.forEach((student,index) =>{
        if(student.class === this.roomName){
            var join = `Thành viên ${student.name} đã tham gia phòng ${this.roomName}`;
            room.broadcast(join);
        }
    })
}

var lop1 = new room("61th5");
var lop2 = new room("12a1");
var tv1 = new member("vu trung kien", lop1);
var tv2 = new member("dam thi hang", lop2);
var tv3 = new member("an viet luong", lop1);
tv1.subcribe();
tv2.subcribe();
tv3.subcribe();
tv1.publish("lau roi ko gap");
tv2.publish("dao nay khoe ko");
tv3.publish("1 nam roi nhi");
console.log(tv1);
console.log(tv2);
console.log(tv3);

