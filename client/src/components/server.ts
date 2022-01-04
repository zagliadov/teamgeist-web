import express from 'express';
import path from 'path';
const app = express();

app.use(express.static('build'));
app.get('*', (req: any, res: any) => {
    req.setFile(path.resolve(__dirname, 'build', 'index.html'));
})


app.listen(5000, () => {
    console.log('server run')
})