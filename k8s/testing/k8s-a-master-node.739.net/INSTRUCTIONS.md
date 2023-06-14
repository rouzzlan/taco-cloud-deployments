# Testing Instructions

## Address-service

deployed following files

- [config_address-service.yaml](../../config_address-service.yaml)
- [deployment_address-service.yaml](../../deployment_address-service.yaml)
- [endpoint.yaml](../../endpoint.yaml) (needs only once)
- [service_address-service.yaml](../../service_address-service.yaml)

server `k8s-a-master-node.739.net`, service running on port `32010`.
```sh
curl http://k8s-a-master-node.739.net:32010/address/c49a20095a4f5ac6f83a3c0ff33854327b1cf3c2c5b39aa6f934c1fe53c1dd61
```
output
```json
{"id":"644874b3777555522fd294ca","street":"Kloosterstraat 27A","city":"Emblem","state":"Antwerpen","country":"BE","zip":"2520","hash":"c49a20095a4f5ac6f83a3c0ff33854327b1cf3c2c5b39aa6f934c1fe53c1dd61"}
```