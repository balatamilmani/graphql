const db = require('./db');
const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
    students: (root, args, context, info) => {
        console.log(root);
        console.log(args);
        console.log(context);
        console.log('***********INFO***********');
        console.log(info);
        return db.students.list();
    },
    studentById: (root, args, context, info) => {
        console.log(args.id);
        return db.students.list().find((std)=>{return std.id === args.id;});
    }
    
 }

 //for each single student object returned,resolver is invoked

const Student = {
    fullName:(root,args,context,info) => {
        console.log(root.firstName);
       return root.firstName+":"+root.lastName
    },
    college: (root) => {
        console.log(root.collegeId);
        return db.colleges.list().find((college)=> {return root.collegeId === college.id;});
    }
 }

 const Mutation = {
    createStudent:(root,args,context,info) => {
       return db.students.create({collegeId:args.collegeId,
       firstName:args.firstName,
       lastName:args.lastName})
    }
 }
 module.exports = {Query, Student, Mutation}