module.exports = (connection, DataTypes) => {
    const Users = connection.define("users",{
        lastName:{
            type: DataTypes.STRING,

        },
        firstName:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        passsword:{
            type: DataTypes.STRING,
        },
        phone:{
            type: DataTypes.STRING,

        },
        status:{
            type:DataTypes.ENUM("Delivered","Process","Canceled"),
            defaultValue:"Delivered"
        },
    })
    return Users;
}