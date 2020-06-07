import { expect } from 'chai';

import { copyrightYear, serviceStatus } from './../src/client/utils';
import { exampleFunction } from './../src/server/utils/example';

describe('Client utilities', () =>
{
    describe('copyrightYear()', () => 
    {
        it('should equal current year (2020)', () =>
        {
            const testYear = copyrightYear(2020, 2020);

            expect(testYear).to.equal('2020');
        });

        it('should equal "2019 - 2020"', () =>
        {
            const testYear = copyrightYear(2019, 2020);

            expect(testYear).to.equal('2019 - 2020');
        });

        it('default should equal "2020"', () =>
        {
            const testYear = copyrightYear();

            expect(testYear).to.equal('2020');
        });
    });

    describe('serviceStatus()', () => 
    {
        it('status "minor" should return "green"', () =>
        {
            const testStatus = serviceStatus('minor');

            expect(testStatus).to.equal('green');
        });

        it('status "major" should return "yellow"', () =>
        {
            const testStatus = serviceStatus('major');

            expect(testStatus).to.equal('yellow');
        });

        it('status "critical" should return "red"', () =>
        {
            const testStatus = serviceStatus('critical');

            expect(testStatus).to.equal('red');
        });

        it('default status should return "grey"', () =>
        {
            const testStatus = serviceStatus();

            expect(testStatus).to.equal('grey');
        });
    });
});

describe('Server utilities', () =>
{
    describe('exampleFunction()',  () => 
    {
        it('output should equal "testService"', () =>
        {
            expect(exampleFunction()).to.equal('testService');
        });
    });
});
