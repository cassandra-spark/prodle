import Dashboard from '../../components/Dashboard'
import ProjectTabs from '../../components/ProjectTabs'

export default function Project() {
  return (
    <Dashboard current="Projects">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Spraycoating of Silicon Nanoparticles as Anode Material in Solid State Batteries </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Edit
              </button>
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <ProjectTabs current="Overview" />

          <p className="mt-12">
            The reasearch in our group about solid state batteries is carried out as part of the "OptiKeraLyt" project (material and process optimization for lithium-ion batteries with ceramic solid state electrolytes). Within our subproject, one of the issues is the connection between anode and solid state electrolyte. In particular we are investigating the spraycoating of planar and surface structured solid state electrolytes with silicon nanoparticle dispersions. Important parameters are the coating homogeneity and the achievable coating thicknesses and porosities.<br />
<br />
Possible topics for Master/Bachelor theses and projects:<br />
<br />
Investigation of the silicon nanoparticle layer formation during spraycoating -&gt; experimental investigation and model development 
Investigations into the reduction of so-called coffee ring structures (accumulation of nanoparticles at the droplet edge) by suitable choice of dispersing media 
Analysis of sprayed layers by means of light-, electron- and confocal-microscopy   
Experiments on the planarization of sprayed nanoparticle layers 
          </p>
        </div>
      </main>
    </Dashboard>
  )
}
