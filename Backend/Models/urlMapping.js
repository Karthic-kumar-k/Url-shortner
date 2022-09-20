module.exports = (sequelize, DataTypes) =>{

    const UrlMapping = sequelize.define
        (   'UrlMapping' , 
        
        {   transformedUrl : DataTypes.STRING,
            actualUrl : DataTypes.STRING
        } , 
        
        {   freezeTableName : true
        }
    )

    return UrlMapping; 
}