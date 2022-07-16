import Transport, { TransportConfig } from './transport';
import consoleTransport from './console';

const transports = { console: consoleTransport };

export { Transport, TransportConfig };

export default transports;
