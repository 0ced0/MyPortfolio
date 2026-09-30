import forecastingCharts from '../assets/easyflow/images/forecastingCharts.png'
import monitoringDashboard from '../assets/easyflow/images/monitoringDashboard.png'
import sumoSimulation from '../assets/easyflow/images/sumoSimulation.png'
import trafficLightInterface from '../assets/easyflow/images/trafficLightInterface.png'
import violationDetection from '../assets/easyflow/images/violationDetection.png'
import yoloDetectionAndTracking from '../assets/easyflow/images/yoloDetectionandTracking.png'
import agriwiseDemandAnalysis from '../assets/agriwise/images/demandAnalysis.png'
import agriwiseMapping from '../assets/agriwise/images/mapping.png'
import agriwiseMarketIntelligence from '../assets/agriwise/images/marketIntelligence.png'
import agriwisePresentation from '../assets/agriwise/images/presentation.jpg'
import communityFeature from '../assets/cospheria/images/communityFeature.png'
import eventWorkflow from '../assets/cospheria/images/eventWorkflow.png'
import platformInterface from '../assets/cospheria/images/platformInterface.png'

export const focusAreas = ['Full-Stack Development', 'Backend Engineering', 'Frontend Applications', 'Database & API Design', 'System Architecture', 'Intelligent Systems']

export const projects = {
  easyflow: {
    title: 'Easy-Flow', subtitle: 'End-to-End Intelligent Traffic Management Platform', period: '2026 – Present', role: 'Sole thesis developer / researcher', label: 'Undergraduate Thesis / Research & Development Project',
    summary: 'An end-to-end intelligent traffic management platform integrating real-time video processing, backend services, databases, forecasting, simulation, adaptive signal logic, and a monitoring dashboard.',
    tags: ['Full-Stack', 'Real-Time Systems', 'Computer Vision', 'Forecasting', 'Simulation'],
    stack: ['Python', 'Flask', 'React', 'MySQL / MariaDB', 'YOLOv8', 'ByteTrack', 'OpenCV', 'PyTorch', 'AGCRN', 'SUMO'],
    pipeline: ['CCTV Streams', 'Video Processing Services', 'Traffic Analytics', 'Backend / REST APIs', 'Database', 'Forecasting & Decision Logic', 'Simulation / Traffic Control', 'React Monitoring Interface'],
    sections: [
      ['The problem', 'Traffic operations need a usable picture of conditions at an intersection. Easy-Flow explores how live video feeds, measured traffic signals, forecasting, and simulation can inform monitoring and signal-timing decisions without exposing sensitive municipal infrastructure.'],
      ['System architecture', 'Easy-Flow is designed as an integrated software platform: video-processing services generate traffic analytics, backend services expose operational data, a database stores measured intervals, and a React monitoring interface brings those system outputs together. Forecasting, simulation, and adaptive timing remain connected subsystems rather than standalone research artifacts.'],
      ['Backend architecture', 'Flask services organize traffic data and operational views through REST APIs. This layer connects processing outputs, stored traffic intervals, forecasting results, and dashboard-facing requests while keeping service boundaries explicit.'],
      ['Data pipeline', 'Video-derived traffic indicators are aggregated into meaningful intervals and prepared for storage, monitoring, and forecasting. The pipeline handles flow measurement, speed estimation, spatial density measurement, and configurable regions of interest for illegal-parking and violation detection.'],
      ['Frontend / dashboard', 'A React dashboard surfaces monitored conditions, processed traffic indicators, forecasting outputs, and operational views. It is the system’s monitoring layer, built to make complex traffic-state information usable in context.'],
      ['Real-time video processing', 'Video frames are processed with YOLOv8 detection and ByteTrack object tracking. This service supports vehicle flow measurement, speed estimation, spatial density measurement, and identity persistence across frames.'],
      ['Database / APIs', 'MySQL or MariaDB stores traffic intervals and system data used across the monitoring, forecasting, and control workflows. Flask REST APIs provide the integration boundary between the dashboard and the platform services.'],
      ['Intelligent systems', 'YOLOv8, ByteTrack, and PyTorch AGCRN support the platform’s computer-vision and spatio-temporal forecasting capabilities. These components turn observed traffic activity into analytics and multi-horizon predictions for downstream decision logic.'],
      ['Adaptive traffic control', 'Measured and forecast traffic conditions feed traffic-state classification and adaptive timing logic. The system is being developed as a decision-support and testing environment, not as an unverified replacement for traffic operations.'],
      ['SUMO simulation', 'SUMO provides a controlled environment to test intersection behavior and evaluate signal-control scenarios before or alongside live system testing.'],
      ['Deployment / networking', 'The system is being tested for deployment through a municipal CCTV gateway. Infrastructure addresses, credentials, and other operationally sensitive details are intentionally omitted from this portfolio.'],
      ['Technical challenges', 'The work brings together noisy video conditions, identity persistence across frames, meaningful aggregation windows, forecast data preparation, and integration across vision, backend services, simulation, and a live interface.'],
      ['Current status', 'Under active research and development. Quantitative performance results will be added only after they are finalized and appropriate to share.'],
      ['Lessons learned', 'End-to-end intelligent systems depend as much on service boundaries, data definitions, operational interfaces, and deployment constraints as on model selection.']
    ],
    images: [
      { title: 'Monitoring dashboard', src: monitoringDashboard },
      { title: 'YOLO detection and tracking', src: yoloDetectionAndTracking },
      { title: 'SUMO simulation', src: sumoSimulation },
      { title: 'Forecasting charts', src: forecastingCharts },
      { title: 'Traffic-light interface', src: trafficLightInterface },
      { title: 'Violation detection', src: violationDetection }
    ]
  },
  cospheria: {
    title: 'Cospheria', subtitle: 'Cosplay-Focused Web Platform', period: 'In development', role: 'Full-stack web development', label: 'Product development',
    summary: 'A cosplay-focused web platform combining event functionality, organizer tools, and community/social features for real-world partnership and event use contexts.',
    tags: ['Full-Stack', 'Web Platform', 'Product Development', 'Event Systems', 'Community Platform'],
    stack: ['JavaScript', 'React', 'Full-stack web development', 'Event tools'], pipeline: [],
    sections: [
      ['The project', 'Cospheria is a developing platform for cosplay communities and events. It brings event functionality, organizer tools, and community/social features into a single product context.'],
      ['Product and frontend development', 'The platform is being shaped as a responsive web product with interface flows that support both discovery and participation. Frontend architecture focuses on making community, account, and event workflows clear across device sizes.'],
      ['Backend and data workflows', 'The development scope includes backend functionality and database-driven features for account and user workflows, event information, organizer tools, and community interactions. These system concerns are treated as core product work, alongside the interface.'],
      ['Event and organizer functionality', 'Organizer-oriented tools and event functionality are being developed around real event needs and partnership context, with care not to claim capabilities that are not yet publicly established.'],
      ['Community platform', 'Community and social features are part of the platform’s intended product experience, creating a focused space for cosplay participation and connection.'],
      ['Current status', 'In development. The portfolio intentionally does not claim user numbers, traction, commercial success, or features that are not yet publicly established.']
    ],
    images: [
      { title: 'Platform interface', src: platformInterface },
      { title: 'Event workflow', src: eventWorkflow },
      { title: 'Community feature', src: communityFeature }
    ]
  },
  agriwise: {
    title: 'AgriWise', subtitle: 'Data-Driven Agricultural Decision-Support Platform', period: 'Hack4AProgress 2026', role: 'Hackathon team project', label: 'Winner – Hack4AProgress 2026 CALABARZON',
    summary: 'A data-driven agricultural decision-support platform developed during Hack4AProgress 2026, connecting public data, supply-demand analysis, GIS visualization, and farmer-facing market intelligence.',
    tags: ['Full-Stack', 'Data Engineering', 'Decision Support', 'Forecasting', 'GIS'],
    stack: ['Python', 'Pandas', 'XGBoost', 'GIS', 'Data preprocessing', 'Forecasting', 'RAG concept'],
    pipeline: ['PSA / Agricultural Data', 'Data Ingestion & Preprocessing', 'Backend / Data-Processing Workflows', 'Forecasting', 'Supply-Demand Analysis', 'GIS Market Intelligence', 'Farmer-Facing Interface'],
    sections: [
      ['The problem', 'Agricultural decisions are often made with fragmented information about household demand, labor conditions, production, and local opportunity. AgriWise framed these inputs as an accessible decision-support workflow.'],
      ['Data ingestion and preprocessing', 'The work considered PSA FIES household expenditure data, PSA LFS indicators, and agricultural supply/utilization information. Cleaning and transformation prepare these sources for quarterly demand estimation and geographic estimation.'],
      ['Backend and data-processing workflows', 'The platform concept connects source data, preprocessing, analysis, and decision-support outputs as a data-intensive software workflow rather than treating forecasting as an isolated model.'],
      ['Forecasting and supply-demand analysis', 'The team explored XGBoost alongside statistical benchmarking and disaggregation concepts to support demand and municipal-level estimation or simulation. Supply-demand gap analysis helps frame local market opportunities. Metrics are not presented because no final model evaluation is being claimed.'],
      ['GIS and market intelligence', 'GIS-based visualization was used to present local market opportunities in an interpretable form for farmer-facing use.'],
      ['Farmer-facing interface', 'The product direction focused on translating data and analysis into accessible market intelligence and decision-support interactions.'],
      ['AI / RAG assistant concept', 'An AI / RAG agriculture-extension assistant was proposed as a way to help translate platform information into approachable advisory interactions.'],
      ['Hackathon development', 'Built during Hack4AProgress 2026 CALABARZON, with emphasis on connecting data, analysis, and a usable product narrative within a rapid development cycle.'],
      ['Result', 'Winner – Hack4AProgress 2026 CALABARZON.'],
      ['Lessons learned', 'Public data is valuable when its constraints are made clear and its outputs are designed around practical decisions rather than dashboards alone.']
    ],
    images: [
      { title: 'Market intelligence view', src: agriwiseMarketIntelligence },
      { title: 'GIS opportunity map', src: agriwiseMapping },
      { title: 'Demand analysis', src: agriwiseDemandAnalysis },
      { title: 'Hackathon presentation', src: agriwisePresentation }
    ]
  }
}

export const skills = {
  'Software Engineering': {
    Programming: ['Python', 'JavaScript', 'C#', 'SQL'],
    Frontend: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Recharts'],
    Backend: ['Flask', 'REST APIs', 'Backend application architecture'],
    Databases: ['MySQL', 'MariaDB', 'SQLite'],
    'Development / Deployment': ['Git', 'GitHub', 'Linux', 'Vite', 'Deployment workflows'],
    'Data Engineering': ['Pandas', 'NumPy', 'Data preprocessing', 'Aggregation', 'ETL-style workflows']
  },
  'Intelligent Systems': {
    'Computer Vision': ['YOLOv8', 'OpenCV', 'ByteTrack', 'CVAT'],
    'Machine Learning': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost'],
    Forecasting: ['Time-series forecasting', 'Spatio-temporal forecasting'],
    Simulation: ['SUMO']
  }
}
