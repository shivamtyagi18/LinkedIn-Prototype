



class Unit {

    // Entity is used as node or edge type, for different classifications
    //    i.e. 'person', 'game', 'road', etc.
    constructor(entity, properties) {
  
      this.entity = entity + '';
  
      this.load(properties || {});
  
    }
  
    // load properties (id, name, age, etc.) from an object
    load(properties) {
  
      let p = Object.create(null);
  
      Object.keys(properties).forEach(function(v) {
  
        p[v] = properties[v];
  
      });
  
      this.properties = p;
  
      return this;
  
    }
  
    set(property, value) {
  
      return this.properties[property] = value;
  
    }
  
    unset(property) {
  
      return delete this.properties[property];
  
    }
  
    has(property) {
  
      return Object.prototype.hasOwnProperty.call(this.properties, property);
  
    }
  
    get(property) {
  
      return this.properties[property];
  
    }
  
    toString() {
  
      return [this.constructor.name, ' (', this.entity, ' ', JSON.stringify(this.properties) ,')'].join('');
  
    }
  
  }

//-------------------------------------------------------------------------------
  class Node extends Unit {

    constructor(entity, properties) {
  
      super(entity, properties);
      this.edges = [];
      this.inputEdges = [];
      this.outputEdges = [];
  
    }
  
    unlink() {
  
      let edges = this.edges;
  
      for (let i = 0, len = edges.length; i < len; i++) {
        edges[i].unlink();
      }
  
      return true;
  
    }
  
  }
//-------------------------------------------------------------------------------
  class Edge extends Unit {

    constructor(entity, properties) {
  
      super(entity, properties);
  
      this.inputNode = null;
      this.outputNode = null;
      this.duplex = false;
  
      this.distance = 1;
  
    }
  
    // link a specific node in a certain direction
    _linkTo(node, direction) {
  
      if (direction <= 0) {
        node.inputEdges.push(this);
      }
  
      if (direction >= 0) {
        node.outputEdges.push(this);
      }
  
      node.edges.push(this);
  
      return true;
  
    }
  
    // link two nodes, optionally make edge bidirectional (duplex)
    link(inputNode, outputNode, duplex) {
  
      this.unlink();
  
      this.inputNode = inputNode;
      this.outputNode = outputNode;
      this.duplex = !!duplex;
  
      if (duplex) {
        this._linkTo(inputNode, 0);
        this._linkTo(outputNode, 0);
        return this;
      }
  
      this._linkTo(inputNode, 1);
      this._linkTo(outputNode, -1);
      return this;
  
    }
  
    // distance for traversal
    setDistance(v) {
      this.distance = Math.abs(parseFloat(v) || 0);
      return this;
    }
  
    // weight is 1 / distance
    setWeight(v) {
      this.distance = 1 / Math.abs(parseFloat(v) || 0);
      return this;
    }
  
    // find the opposite node given a starting node
    oppositeNode(node) {
  
      if (this.inputNode === node) {
        return this.outputNode;
      } else if (this.outputNode === node) {
        return this.inputNode;
      }
  
      return;
  
    }
  
    // unlink edge, remove connections from nodes
    unlink() {
  
      let pos;
      let inode = this.inputNode;
      let onode = this.outputNode;
  
      if (!(inode && onode)) {
        return;
      }
  
      (pos = inode.edges.indexOf(this)) > -1 && inode.edges.splice(pos, 1);
      (pos = onode.edges.indexOf(this)) > -1 && onode.edges.splice(pos, 1);
      (pos = inode.outputEdges.indexOf(this)) > -1 && inode.outputEdges.splice(pos, 1);
      (pos = onode.inputEdges.indexOf(this)) > -1 && onode.inputEdges.splice(pos, 1);
  
      if (this.duplex) {
  
        (pos = inode.inputEdges.indexOf(this)) > -1 && inode.inputEdges.splice(pos, 1);
        (pos = onode.outputEdges.indexOf(this)) > -1 && onode.outputEdges.splice(pos, 1);
  
      }
  
      this.inputNode = null;
      this.outputNode = null;
  
      this.duplex = false;
  
      return true;
  
    }
  
  }