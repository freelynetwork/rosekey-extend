// 旧CommonJS形式
// module.exports = class ScheduleisFailed1704191688953 {
//     name = 'ScheduleisFailed1704191688953'
//
//     async up(queryRunner) {
//         await queryRunner.query(`ALTER TABLE "note_schedule" ADD "isFailed" boolean NOT NULL DEFAULT false`);
//     }
//
//     async down(queryRunner) {
//         await queryRunner.query(`ALTER TABLE "note_schedule" DROP COLUMN "isFailed"`);
//     }
// }

// 新ESモジュール形式
export default class ScheduleisFailed1704191688953 {
    constructor() {
        this.name = 'ScheduleisFailed1704191688953';
    }

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_schedule" ADD "isFailed" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note_schedule" DROP COLUMN "isFailed"`);
    }
}
