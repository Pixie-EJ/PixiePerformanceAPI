const connection = require('../infrastructure/connection');

class PointService {
    async getCards(res) {
        let cards = [];
        const sqlScores = 'select multiplier_value, rules_id from scores';
        const sqlRules = 'select id, point, optional_point from rules';
        await connection.query(sqlScores, async (err, resultScores) => {
            if (err) {
                return err;
            }
            await connection.query(sqlRules, (err, resultRules) => {
                if (err) {
                    return err;
                }
                let expected = 0, total = 0, percentage = 0;
                resultScores.map((score) => {
                    resultRules.map((rule) => {
                        if (score.rules_id === rule.id) {
                            total = total + (score.multiplier_value * rule.point)
                            if (rule.optional_point === 0) {
                                expected = expected + (score.multiplier_value * rule.point)
                            }
                        }
                    })
                })
                percentage = parseInt((total/expected)*100);
                cards = [expected, total, percentage];
            });
            setTimeout(() => {
                return res(cards);
            });
        });
    }   
}

module.exports = PointService;