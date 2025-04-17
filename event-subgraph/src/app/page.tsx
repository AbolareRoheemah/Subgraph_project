"use client";
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';

interface EventCreated {
  id: string;
  eventId: string;
  eventName: string;
  ownerAddress: string;
  blockNumber: string;
  blockTimestamp: string;
  transactionHash: string;
}

interface EventsData {
  eventCreateds: EventCreated[];
}

export default function Home() {
  const router = useRouter();
  const GET_EVENTS = gql`
    query GetEvents {
      eventCreateds(first: 10) {
        id
        eventId
        eventName
        ownerAddress
        blockNumber
        blockTimestamp
        transactionHash
      }
    }
  `;
  
  const { loading, error, data } = useQuery<EventsData>(GET_EVENTS);
  
  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-pulse text-xl font-medium">Loading events...</div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        <p className="font-medium">Error</p>
        <p>{error.message}</p>
      </div>
    </div>
  );
  
  // Format timestamp to readable date
  const formatDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleString();
  };
  
  // Truncate long strings like addresses
  const truncateAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blockchain Events Explorer</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">View the latest events created on the blockchain</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.eventCreateds.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                <h2 className="text-xl font-semibold text-indigo-900">{event.eventName}</h2>
              </div>
              <div className="px-6 py-4 space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Event ID</p>
                  <p className="font-mono text-sm">{event.eventId}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Owner</p>
                  <p className="font-mono text-sm" title={event.ownerAddress}>{truncateAddress(event.ownerAddress)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Created At</p>
                  <p className="text-sm">{formatDate(event.blockTimestamp)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Block</p>
                  <p className="font-mono text-sm">{event.blockNumber}</p>
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                <a 
                  href={`https://etherscan.io/tx/${event.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  View Transaction →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {data?.eventCreateds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
}