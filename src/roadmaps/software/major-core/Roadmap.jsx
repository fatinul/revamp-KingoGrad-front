import React, { useState, useCallback } from 'react'
import ReactFlow, { Controls, Background, MiniMap, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import nodes from './nodes.js'
import edges from './edges.js'

function Roadmap() {
  const [node, setNodes] = useState(nodes);
  const [edge, setEdges] = useState(edges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <>
      <div style={{ width: '95%', height: '800px'}}>
        <ReactFlow nodes={node} edges={edge} onNodesChange={onNodesChange}>
          <Background color="#555" />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}

export default Roadmap;