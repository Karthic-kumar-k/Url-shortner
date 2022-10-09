module.exports = (sequelize, DataTypes) =>{

    const UrlMapping = sequelize.define
        (   'UrlMapping' , 
        
        {   transformedUrl : DataTypes.STRING,
            actualUrl : {
                type : DataTypes.STRING,
                unique : true
            }
        } , 
        
        {   freezeTableName : true
        }
    )

    return UrlMapping; 
}