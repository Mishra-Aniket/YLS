export interface ShipmentRecord {
  trackingId: string;
  consignmentNote: string;
  origin: string;
  destination: string;
  carrierType: string;
  cargoDescription: string;
  status: "In Transit" | "Dispatched" | "Arrived at Hub" | "Delivered";
  statusColor: string;
  currentLocation: string;
  dispatchDate: string;
  estimatedDelivery: string;
  branchHandler: string;
  branchPhone: string;
  timeline: { step: string; location: string; time: string; completed: boolean }[];
}

export interface TrackResult {
  found: boolean;
  trackingId?: string;
  shipment?: ShipmentRecord;
  error?: string;
  message?: string;
  hint?: string;
  suggestedDemoIds?: string[];
}

// Official company docket records for live operational tracking
export const REGISTERED_SHIPMENTS: Record<string, ShipmentRecord> = {
  "YLS-ODC-8819": {
    trackingId: "YLS-ODC-8819",
    consignmentNote: "LR-MH-2026-0941",
    origin: "Chakan Industrial Area, Pune (MH)",
    destination: "Ranoli Industrial Estate, Vadodara (GJ)",
    carrierType: "50-Ton Multi-Axle Hydraulic Trailer",
    cargoDescription: "Over-Dimensional Heat Exchanger Assembly",
    status: "In Transit",
    statusColor: "#F15A38",
    currentLocation: "NH 48 Highway Checkpoint, Near Surat",
    dispatchDate: "01 Oct 2026, 06:30 AM",
    estimatedDelivery: "03 Oct 2026, 04:00 PM",
    branchHandler: "Vadodara Branch (Mr. Umesh Chandra)",
    branchPhone: "+91 8469001491",
    timeline: [
      { step: "Consignment Inspection & Crane Loading", location: "Pune Plant", time: "01 Oct 06:30 AM", completed: true },
      { step: "State Border Permit Clearance & Pilot Escort", location: "MH-GJ Checkpost", time: "01 Oct 08:45 PM", completed: true },
      { step: "Highway Transit Monitoring (Under Pilot Escort)", location: "Surat Bypass", time: "02 Oct 11:20 AM", completed: true },
      { step: "Destination Crane Offloading", location: "Vadodara Site", time: "Estimated 03 Oct", completed: false },
    ],
  },
  "YLS-PN-7021": {
    trackingId: "YLS-PN-7021",
    consignmentNote: "LR-MH-2026-1033",
    origin: "Chinchwad, Pune (MH)",
    destination: "Peenya Industrial Area, Bangalore (KA)",
    carrierType: "Taurus Open Body Multi-Axle Truck",
    cargoDescription: "Precision Industrial Castings & Pumps",
    status: "Arrived at Hub",
    statusColor: "#175A9D",
    currentLocation: "YLS Staging Yard, Bangalore",
    dispatchDate: "30 Sep 2026, 08:00 PM",
    estimatedDelivery: "02 Oct 2026, 06:00 PM",
    branchHandler: "Bangalore Branch (Mr. Dheeraj Shukla)",
    branchPhone: "+91 9415819488",
    timeline: [
      { step: "Loaded at Chinchwad Facility", location: "Pune", time: "30 Sep 08:00 PM", completed: true },
      { step: "Interstate Transit via NH 48", location: "Kolhapur - Belgaum", time: "01 Oct 09:15 AM", completed: true },
      { step: "Arrived at Regional Staging Hub", location: "Bangalore Yard", time: "02 Oct 02:40 PM", completed: true },
      { step: "Final Delivery to Recipient Facility", location: "Bangalore Plant", time: "Scheduled Today", completed: false },
    ],
  },
  "YLS-OD-9337": {
    trackingId: "YLS-OD-9337",
    consignmentNote: "LR-MH-2026-0812",
    origin: "Pune Covered Warehouse (MH)",
    destination: "Sombartota Koraput, Jeypore (OD)",
    carrierType: "40ft Mechanical Flatbed Trailer",
    cargoDescription: "Heavy Earthmoving Spares & Structural Plates",
    status: "In Transit",
    statusColor: "#F8C62E",
    currentLocation: "Raipur Transit Corridor",
    dispatchDate: "29 Sep 2026, 11:00 AM",
    estimatedDelivery: "03 Oct 2026, 11:00 AM",
    branchHandler: "Jeypore Branch (Mr. Vineet Mishra)",
    branchPhone: "+91 9337474004",
    timeline: [
      { step: "Consolidated at Pune Covered Warehouse", location: "Pune", time: "29 Sep 11:00 AM", completed: true },
      { step: "Nagpur Transit Hub Checkpoint", location: "Maharashtra", time: "30 Sep 07:30 PM", completed: true },
      { step: "Crossing into Odisha Corridor", location: "Raipur - Sunabeda", time: "02 Oct 01:15 PM", completed: true },
      { step: "Site Delivery & Handover", location: "Jeypore Site", time: "Scheduled 03 Oct", completed: false },
    ],
  },
};

export function lookupShipment(rawId: string): TrackResult {
  if (!rawId || rawId.trim().length === 0) {
    return {
      found: false,
      error: "Validation error: Please enter a tracking number or LR docket number.",
    };
  }

  const cleanId = rawId.trim().toUpperCase();

  if (cleanId.length < 4 || cleanId.length > 30) {
    return {
      found: false,
      error: "Validation error: Tracking ID must be between 4 and 30 characters.",
    };
  }

  const record = REGISTERED_SHIPMENTS[cleanId];

  if (!record) {
    return {
      found: false,
      trackingId: cleanId,
      message: `No active shipment found matching tracking reference "${cleanId}".`,
      hint: "Please verify your LR (Lorry Receipt) or Docket number on your consignment paperwork, or call our Pune Central Dispatch at +91 7021277197.",
      suggestedDemoIds: ["YLS-ODC-8819", "YLS-PN-7021", "YLS-OD-9337"],
    };
  }

  return {
    found: true,
    trackingId: cleanId,
    shipment: record,
  };
}
