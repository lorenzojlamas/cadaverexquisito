import {NextApiRequest, NextApiResponse} from 'next';
import {Cadaveres} from '../../controllers/Cadaveres';
import {addCors, cors} from '../../utils/cors';

const cadaveres = new Cadaveres();
/**
 * Middleware to procces the requests
 *
 * @param {NextApiRequest} req NextApiRequest
 * @param {NextApiResponse} res NextApiResponse
 */
async function cadaver(
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> {
    // Run the middleware
    await addCors(req, res, cors);
    if (req.method === 'GET') {
        const cadaver = await cadaveres.get();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(cadaver));
    }
}

export default cadaver;