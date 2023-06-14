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

## Credit Card Service
the endpoint manifest [endpoint.yaml](../../endpoint.yaml) should be already be deployed
deployment manifest files

- [config_cc-service.yaml](../../config_cc-service.yaml)
- [deployment_cc-service.yaml](../../deployment_cc-service.yaml)
- [service_cc-service.yaml](../../service_cc-service.yaml)

```sh
curl http://k8s-a-master-node.739.net:32011/creditcard/90144e63116d1be8455a9ff7ddbe480c92c791a298026d4c2bafa7d6388b6285
```