import * as exports from './index';
import FullScreenLoader from './FullScreenLoader';
import Loader from './Loader';
import InlineAbsolutePositionLoader from './InlineAbsolutePositionLoader';
import InlineSmallLoader from './InlineSmallLoader';

describe('expots', () => {
	it('should exports components', () => {
		expect(exports).toEqual(expect.objectContaining({
			FullScreenLoader, Loader, InlineAbsolutePositionLoader, InlineSmallLoader
		}))
	});
});
