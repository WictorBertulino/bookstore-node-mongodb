import mongoose  from 'mongoose';

mongoose.Schema.Types.String.set('validate',{
    validator:(valor)=> valor !== '',
    message:({path}) => `${path} não pode ser vazio`
});

